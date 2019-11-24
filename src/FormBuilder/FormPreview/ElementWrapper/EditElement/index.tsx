import React, { Fragment, useState } from "react";
import EditButton from "./EditButton";
import SideDrawer from "./SideDrawer/index";

// applies delete and edit capabilities
export default (props: any) => {
  const [showDrawer, setShowDrawer] = useState(false);

  function openDrawer() {
    setShowDrawer(true);
  }

  function closeDrawer() {
    setShowDrawer(false);
  }

  return (
    <Fragment>
      <SideDrawer
        {...props}
        closeDrawer={closeDrawer}
        showDrawer={showDrawer}
      />
      <EditButton onClick={openDrawer} />
    </Fragment>
  );
};
