/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 *
 * This product is licensed to you under the Apache License, Version 2.0 (the "License").
 * You may not use this product except in compliance with the License.
 *
 * This product may include a number of subcomponents with separate copyright notices
 * and license terms. Your use of these subcomponents is subject to the terms and
 * conditions of the subcomponent's license, as noted in the LICENSE file.
 */

export var AppActions = Reflux.createActions([
  'init', 'openHome', 'openView', 'openToolbarEventLogs'
]);

export var HostActions = Reflux.createActions([
  'openHosts', 'openHostsNext', 'openAddHost', 'autoConfigureHost',
  'verifyHost', 'addHost', 'createHost', 'editHost', 'updateHost', 'removeHost',
  'operationCompleted', 'disableHost', 'enableHost',
  'acceptCertificateAndAddHost', 'acceptCertificateAndVerifyHost',
  'closeHosts', 'triggerDataCollection'
]);

export var MachineActions = Reflux.createActions([
  'openMachines', 'openMachinesNext', 'openMachineDetails'
]);

export var ComputeActions = Reflux.createActions([
  'openCompute', 'openComputeNext', 'editCompute', 'updateCompute'
]);

export var PlacementActions = Reflux.createActions([
  'openPlacements', 'editPlacement', 'cancelEditPlacement', 'createPlacement', 'updatePlacement',
  'deletePlacement'
]);

export var TemplateActions = Reflux.createActions([
  'openTemplates', 'openContainerRequest', 'openTemplateDetails', 'openAddNewContainerDefinition',
  'openEditContainerDefinition', 'resetContainerDefinitionEdit', 'cancelContainerDefinitionEdit',
  'searchImagesForContainerDefinition', 'selectImageForContainerDescription',
  'addContainerDefinition', 'removeContainerDefinition', 'saveContainerDefinition',
  'increaseClusterSize', 'decreaseClusterSize',
  'createContainer', 'createContainerWithDetails', 'createContainerTemplate',
  'removeTemplate', 'saveTemplateName', 'copyTemplate', 'publishTemplate', 'openImportTemplate',
  'importTemplate', 'openEditNetwork', 'cancelEditNetwork', 'attachNetwork', 'detachNetwork',
  'attachDetachNetwork', 'saveNetwork', 'removeNetwork',
  'openAddClosure', 'removeClosure', 'runClosure', 'cancelAddClosure', 'createClosureTemplate',
  'openCreateNewTemplate', 'createNewTemplate'
]);

export var ContainerActions = Reflux.createActions([
  'openContainers', 'openContainersNext', 'openContainerDetails', 'openClusterDetails',
  'openCompositeContainerDetails', 'openManageContainers', 'openManageComposite',
  'refreshContainer', 'refreshContainerStats',
  'refreshContainerLogs', 'changeLogsSinceDuration', 'changeLogsFormat', 'startContainer',
  'stopContainer', 'createTemplateFromContainer',
  'removeContainer', 'startCompositeContainer', 'stopCompositeContainer',
  'removeCompositeContainer', 'startContainerDetails', 'stopContainerDetails',
  'removeContainerDetails', 'removeContainers', 'operationCompleted', 'operationFailed',
  'modifyClusterSize', 'scaleContainer', 'startCluster', 'stopCluster', 'removeCluster',
  'closeContainers', 'openShell', 'closeShell',
  'batchOpContainers', 'batchOpCompositeContainers', 'batchOpNetworks', 'batchOpClosures',
  'openCreateContainer', 'openCreateNetwork', 'createContainer', 'createNetwork',
  'removeClosureRun', 'openCreateClosure', 'openClosureDetails', 'openCompositeClosureDetails'
]);

export var NetworkActions = Reflux.createActions([
  'removeNetwork', 'networkOperationCompleted', 'networkOperationFailed',
  'openManageNetworks'
]);

export var EventLogActions = Reflux.createActions([
  'openEventLog', 'openEventLogNext', 'retrieveEventLogNotifications', 'selectEventLog',
  'closeEventLog', 'removeEventLog', 'clearEventLog'
]);

export var RegistryActions = Reflux.createActions([
  'openRegistries', 'editRegistry', 'cancelEditRegistry', 'createRegistry', 'checkInsecureRegistry',
  'acceptCertificateAndCreateRegistry', 'verifyRegistry', 'acceptCertificateAndVerifyRegistry',
  'updateRegistry', 'enableRegistry', 'disableRegistry', 'deleteRegistry'
]);

export var HostContextToolbarActions = Reflux.createActions([
  'openToolbarPlacementZones', 'openToolbarCredentials', 'openToolbarCertificates',
  'openToolbarDeploymentPolicies', 'openToolbarEndpoints', 'closeToolbar',
  'createPlacementZone', 'managePlacementZones',
  'createCredential', 'manageCredentials', 'manageCertificates',
  'createDeploymentPolicy', 'manageDeploymentPolicies',
  'createEndpoint', 'manageEndpoints'
]);

export var ComputeContextToolbarActions = Reflux.createActions([
  'openToolbarPlacementZones', 'closeToolbar',
  'createPlacementZone', 'managePlacementZones'
]);

export var RegistryContextToolbarActions = Reflux.createActions([
  'openToolbarCredentials', 'openToolbarCertificates', 'closeToolbar', 'createCredential',
  'manageCredentials', 'manageCertificates'
]);

export var HostsContextToolbarActions = Reflux.createActions([
  'openToolbarRequests', 'openToolbarEventLogs', 'closeToolbar'
]);

export var PlacementContextToolbarActions = Reflux.createActions([
  'openToolbarPlacementZones', 'createPlacementZone', 'managePlacementZones',
  'openToolbarDeploymentPolicies', 'createDeploymentPolicy', 'manageDeploymentPolicies',
  'openToolbarResourceGroups', 'createResourceGroup', 'manageResourceGroups',
  'closeToolbar'
]);

export var TemplatesContextToolbarActions = Reflux.createActions([
  'openToolbarRequests', 'openToolbarEventLogs', 'closeToolbar', 'openToolbarClosureResults'
]);

export var ContainersContextToolbarActions = Reflux.createActions([
  'openToolbarRequests', 'openToolbarEventLogs', 'closeToolbar', 'openToolbarClosureResults'
]);

export var PlacementZonesActions = Reflux.createActions([
  'retrievePlacementZones', 'editPlacementZone', 'cancelEditPlacementZone', 'createPlacementZone',
  'updatePlacementZone', 'deletePlacementZone'
]);

export var CredentialsActions = Reflux.createActions([
  'retrieveCredentials', 'editCredential', 'cancelEditCredential', 'createCredential',
  'updateCredential', 'deleteCredential'
]);

export var ResourceGroupsActions = Reflux.createActions([
  'retrieveGroups', 'editGroup', 'cancelEditGroup', 'createGroup', 'updateGroup', 'deleteGroup'
]);

export var DeploymentPolicyActions = Reflux.createActions([
  'retrieveDeploymentPolicies', 'editDeploymentPolicy', 'cancelEditDeploymentPolicy',
  'createDeploymentPolicy', 'updateDeploymentPolicy', 'deleteDeploymentPolicy'
]);

export var CertificatesActions = Reflux.createActions([
  'retrieveCertificates', 'editCertificate', 'cancelEditCertificate', 'createCertificate',
  'updateCertificate', 'deleteCertificate', 'importCertificate'
]);

export var EnvironmentsActions = Reflux.createActions([
  'openEnvironments', 'openEnvironmentsNext', 'openAddEnvironment', 'editEnvironment',
  'cancelEditEnvironment', 'createEnvironment', 'updateEnvironment', 'deleteEnvironment'
]);

export var EndpointsActions = Reflux.createActions([
  'retrieveEndpoints', 'editEndpoint', 'cancelEditEndpoint', 'createEndpoint',
  'updateEndpoint', 'deleteEndpoint'
]);

export var RequestsActions = Reflux.createActions([
  'openRequests', 'openRequestsNext', 'selectRequests', 'refreshRequests',
  'requestCreated', 'removeRequest', 'closeRequests', 'clearRequests'
]);

export var NotificationsActions = Reflux.createActions([
  'retrieveNotifications'
]);

export var StorageDescriptionsActions = Reflux.createActions([
  'retrieveStorageDescriptions'
]);

export var ClosureActions = Reflux.createActions([
  'openClosures', 'openAddClosure', 'createClosure', 'deleteClosure', 'editClosure', 'runClosure',
   'resetMonitoredClosure', 'createAndRunClosure'
]);

export var ClosureContextToolbarActions = Reflux.createActions([
  'openToolbarPlacementZones', 'closeToolbar',
  'createPlacementZone', 'managePlacementZones'
]);

/*
  Used to trigger a navigation change.
  The one listening for these will eventually call the corresponding action on a App/component level
*/
export var NavigationActions = Reflux.createActions([
  'openHome', 'openHomeAddHost', 'openHosts', 'openHostsSilently', 'openAddHost', 'editHost',
  'openTemplates', 'openEventLog', 'openRegistries', 'openContainerRequest', 'openContainers',
  'openNetworks', 'openContainerDetails', 'openClusterDetails', 'openCompositeContainerDetails',
  'openTemplateDetails', 'showContainersPerPlacement', 'openPlacements', 'openEnvironments',
  'openAddEnvironment', 'editEnvironment', 'openMachines', 'openMachineDetails', 'openCompute',
  'editCompute', 'openClosures', 'openClosuresSilently', 'openAddClosure', 'openClosureDetails',
  'openCompositeClosureDetails'
]);
