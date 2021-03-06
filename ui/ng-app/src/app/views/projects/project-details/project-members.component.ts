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

import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { DocumentService } from "../../../utils/document.service";
import * as I18n from 'i18next';
import { Utils } from "../../../utils/utils";

@Component({
    selector: 'app-project-members',
    templateUrl: './project-members.component.html',
    styleUrls: ['./project-members.component.scss']
})
/**
 *  A project's members view.
 */
export class ProjectMembersComponent implements OnChanges {

    @Input() project: any;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    showAddMembers: boolean;

    members: any[] = [];
    memberToDelete: any;

    selectedMember: any;

    loading:boolean = false;

    get deleteConfirmationDescription(): string {
        return this.memberToDelete && this.memberToDelete.id
            && I18n.t('projects.members.deleteMember.confirmation',
                { projectName:  this.memberToDelete.id } as I18n.TranslationOptions);
    }
    deleteConfirmationAlert: string;

    constructor(protected service: DocumentService) { }

    onAddMembers() {
        this.showAddMembers = true;
    }

    addDone() {
        this.showAddMembers = false;
        this.loadProjectAndMembers();
    }

    addCanceled() {
        this.showAddMembers = false;
    }

    onEdit(member) {
       this.selectedMember = member;
    }

    editDone() {
        this.selectedMember = null;
        this.loadProjectAndMembers();
    }

    editCanceled() {
        this.selectedMember = null;
    }

    onRemove(member) {
        this.memberToDelete = member;
    }

    deleteConfirmed() {
        this.deleteMember();
    }

    deleteCanceled() {
        this.memberToDelete = null;
    }

    ngOnChanges() {
        if (!this.project) {
            this.loadProjectAndMembers();
        } else {
            this.loadMembersOnly();
        }
    }

    private loadMembers(updatedProject: any) {
        this.members = [];

        if (!updatedProject) {
            return;
        }

        updatedProject.administrators.forEach(admin => {
            if (admin) {
                admin.role = 'ADMIN';
                this.members.push(admin);
            }
        });

        updatedProject.members.forEach(member => {
            if (member) {
                member.role = 'MEMBER';
                this.members.push(member);
            }
        });

        updatedProject.viewers.forEach(viewer => {
            if (viewer) {
                viewer.role = 'VIEWER';
                this.members.push(viewer);
            }
        });
    }

    private loadProjectAndMembers() {
        if (this.project) {

            this.loading = true;

            this.service.get(this.project.documentSelfLink, true).then((updatedProject) => {
                this.loading = false;

                this.project = updatedProject;
                this.loadMembers(this.project);
                this.onChange.emit(this.project);

            }).catch((e) => {
                console.log('failed to update project', e);
                this.loading = false;
            })
        }
    }

    private loadMembersOnly() {
        this.loadMembers(this.project);
    }

    private deleteMember() {
        let patchValue;

        let memberRole = this.getPrincipalRole(this.memberToDelete.id);

        if (memberRole === 'ADMIN') {
            patchValue = {
                "administrators": {"remove": [this.memberToDelete.id]}
            };
        } else if (memberRole === 'MEMBER') {
            patchValue = {
                "members": {"remove": [this.memberToDelete.id]}
            };
        } else if (memberRole === 'VIEWER') {
            patchValue = {
                "viewers": {"remove": [this.memberToDelete.id]}
            };
        }

        this.loading = true;
        this.service.patch(this.project.documentSelfLink, patchValue).then(() => {
            // Successfully removed member
            this.loading = false;
            this.updateStateAfterDelete();

        }).catch((error) => {
            this.loading = false;
            if (error.status === 304) {
                // Refresh data
                this.updateStateAfterDelete();
            } else {
                console.log("Failed to remove member", error);
                this.deleteConfirmationAlert = Utils.getErrorMessage(error)._generic;
            }
        });
    }

    private getPrincipalRole(principalId) {
        let foundMember = this.project.administrators.find((admin) => {
            return admin.id === this.memberToDelete.id;
        });

        if (foundMember) {
            return 'ADMIN';
        }

        foundMember = this.project.members.find((member) => {
            return member.id === this.memberToDelete.id;
        });

        if (foundMember) {
            return 'MEMBER';
        }

        foundMember = this.project.viewers.find((viewer) => {
            return viewer.id === this.memberToDelete.id;
        });

        if (foundMember) {
            return 'VIEWER'
        }

        return null;
    }

    updateStateAfterDelete() {
        this.loading = true;
        this.service.get(this.project.documentSelfLink, true).then((updatedProject) => {
            this.loading = false;
            this.memberToDelete = null;

            this.project = updatedProject;
            this.onChange.emit(this.project);
        }).catch((error) => {
            console.log("Failed to reload project data", error);
            this.loading = false;
            this.deleteConfirmationAlert = Utils.getErrorMessage(error)._generic;
        });
    }
}
