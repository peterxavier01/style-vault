"use client";

import React, { useState, useEffect } from "react";

const clientOnly = <T extends {}>(Component: React.ComponentType<T>) => {
  const ClientOnlyComponent: React.FC<T> = (props: T) => {
    const [clientReady, setClientReady] = useState<boolean>(false);

    useEffect(() => {
      setClientReady(true);
    }, []);

    return clientReady ? <Component {...props} /> : null;
  };

  ClientOnlyComponent.displayName = `ClientOnly(${
    Component.displayName || Component.name || "Component"
  })`;

  return Component;
};

export default clientOnly;
