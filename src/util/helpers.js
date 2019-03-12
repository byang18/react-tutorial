export const createErrorAppCode = (errorMsg) => {
  return `const App = () => {
          return(
              <div className="errorBox">
                <div>
                    ${errorMsg}
                </div>
            </div>
          );
      };`;
};

export const pipe = (first, ...more) => more.reduce((acc, curr) => (...args) => curr(acc(...args)), first);

export const beginsWith = (needle, haystack) => {
  return (haystack.substr(0, needle.length) === needle);
};

export const addOrUpdateToState = (state, wrappedComponentID, componentName, componentProperty) => {
  let found = false;
  let newState;

  newState = state.map((componentObj) => {
    if (componentObj.wrappedComponentID === wrappedComponentID) {
      found = true;
      return Object.assign({}, componentObj, { componentProperty });
    }
    return componentObj;
  });

  if (!found) {
    newState = [...state, { wrappedComponentID, componentName, componentProperty }];
  }

  return newState;
};
