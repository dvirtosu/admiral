/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 *
 * This product is licensed to you under the Apache License, Version 2.0 (the "License").
 * You may not use this product except in compliance with the License.
 *
 * This product may include a number of subcomponents with separate copyright notices
 * and license terms. Your use of these subcomponents is subject to the terms and
 * conditions of the subcomponent's license, as noted in the LICENSE file.
 */

import VsphereDatastoresListVue from
  'components/profiles/vsphere/VsphereDatastoresListVue.html';
import { VsphereDatastoreActions } from 'actions/Actions';
import VsphereDatastoreEditor from //eslint-disable-line
  'components/profiles/vsphere/VsphereDatastoreEditor';
import utils from 'core/utils';

export default Vue.component('vsphere-datastores-list', {
  template: VsphereDatastoresListVue,
  props: {
    model: {
      type: Object,
      required: true
    },
    endpoint: {
      type: Object,
      required: true
    }
  },
  data() {
    let sortOrders = {
      name: 1,
      type: 1,
      capacity: 1
    };
    return {
      deleteConfirmationItem: null,
      sortKey: '',
      sortOrders: sortOrders
    };
  },
  computed: {
    itemsCount() {
      let items = this.model.items;
      return items ? Object.keys(items).length : 0;
    }
  },
  methods: {
    isEditingItem(item) {
      let editingItem = this.model.editingItemData && this.model.editingItemData.item;
      return editingItem && editingItem.documentSelfLink === item.documentSelfLink;
    },
    editItem(item, $event) {
      $event.stopImmediatePropagation();
      $event.preventDefault();
      VsphereDatastoreActions.editDatastore(item);
    },
    refresh() {
      VsphereDatastoreActions.retrieveDatastores(this.endpoint.documentSelfLink);
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getGigabytes(bytes) {
      return utils.convertToGigabytes(bytes);
    }
  },
  filters: {
    orderBy(items, sortKey, reverse) {
      if (!sortKey) {
        return items;
      }
      let order = reverse && reverse < 0 ? -1 : 1;
      return items.asMutable().sort((a, b) => {
        a = a[sortKey] + '';
        b = b[sortKey] + '';
        if (!a) {
          a = '';
        }
        if (!b) {
          b = '';
        }
        return a.toLowerCase().localeCompare(b.toLowerCase()) * order;
      });
    }
  }
});
