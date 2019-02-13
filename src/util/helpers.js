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
