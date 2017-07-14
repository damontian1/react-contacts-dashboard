import * as Flux from "flux";

const Dispatcher = Object.assign(new Flux.Dispatcher(), {
  handleViewAction: function(data){
    var data = {
      sourceView: "VIEW_ACTION",
      data
    }
    this.dispatch(data)
  }
})

export default Dispatcher;