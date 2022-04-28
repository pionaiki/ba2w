function init () {}
function enable () {
  setTimeout(function(){
    setActiveWorkspace(1);
  }, 6000);
}
function disable() {}

function getWorkspaceManager() {
    return global.screen || global.workspace_manager;
}

function setActiveWorkspace(index) {
  //if (index >= 0 && index < getWorkspaceManager().n_workspaces) {
    getWorkspaceManager().get_workspace_by_index(index).activate(global.get_current_time());
  //}
}
