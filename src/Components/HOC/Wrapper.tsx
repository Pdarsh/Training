import React from "react";

const Wrapper = (Component: React.FunctionComponent,title:string) => () =>
  (
    <div>
      <h4>This is wrapper for {title} Component</h4>
      <Component/>
    </div>
  )


export default Wrapper

