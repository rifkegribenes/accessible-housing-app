const options = { year: "numeric", month: "short", day: "numeric" };

export const formatDate = date =>
  new Date(date).toLocaleDateString("en-US", options);

export const formatDateTime = date => new Date(date).toLocaleString();

export const splitDate = date => {
  const d = new Date(date);
  let mm = (d.getMonth() + 1).toString();
  let dd = d.getDate().toString();
  if (mm.length < 2) mm = `0${mm}`;
  if (dd.length < 2) dd = `0${dd}`;
  const yyyy = d.getFullYear().toString();
  return { mm, dd, yyyy };
};

export const concatDate = (mm, dd, yyyy) => new Date(`${mm}/${dd}/${yyyy}`);

// force focus on #main when using skip navigation link
// (some browsers will only focus form inputs, links, and buttons)
export const skip = targetId => {
  const removeTabIndex = e => {
    e.target.removeAttribute("tabindex");
  };
  const skipTo = document.getElementById(targetId);
  // Setting 'tabindex' to -1 takes an element out of normal
  // tab flow but allows it to be focused via javascript
  skipTo.tabIndex = -1;
  skipTo.focus(); // focus on the listing container
  // console.log(document.activeElement);
  // when focus leaves this element,
  // remove the tabindex attribute
  skipTo.addEventListener("blur", removeTabIndex);
};

export const randomInt = () => {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

export const scrollToFirstError = errors => {
  // search through errors object to find only those currently mounted in DOM
  // (some errors will be on future tabs and can't be scrolled to yet)
  if (errors) {
    const errorsArray = Object.keys(errors);
    const firstError = errorsArray.find(
      error => !!document.getElementById(error)
    );
    // console.log(errorsArray);
    // console.log(firstError);
    const el = document.getElementById(firstError);
    if (el) {
      const position =
        el.getBoundingClientRect().top + document.documentElement.scrollTop;
      const offset = 200;
      window.scrollTo({ top: position - offset, behavior: "smooth" });
    } else {
      console.log(`can't find element for ${firstError}`);
    }
  }
};

export const bedroomsPriceString = (
  studio_l,
  studio_h,
  br1_l,
  br1_h,
  br2_l,
  br2_h,
  br3_l,
  br3_h,
  br4_l,
  br4_h,
  br5_l,
  br5_h
) => {
  const rawArray = [
    studio_l,
    studio_h,
    br1_l,
    br1_h,
    br2_l,
    br2_h,
    br3_l,
    br3_h,
    br4_l,
    br4_h,
    br5_l,
    br5_h
  ];
  const cA = rawArray.map(price => {
    let cleanedPrice;
    if (price == null) {
      cleanedPrice = null;
    } else if (price < 1) {
      cleanedPrice = "Subsidized";
    } else {
      cleanedPrice = `$${parseInt(price)}`;
    }
    return cleanedPrice;
  });
  const studio =
    cA[0] && cA[1]
      ? `Studio: ${cA[0]}–${cA[1]}`
      : cA[0]
      ? `Studio: ${cA[0]}`
      : null;
  const br1 =
    cA[2] && cA[3] ? `1BR: ${cA[2]}–${cA[3]}` : cA[2] ? `1BR: ${cA[2]}` : null;
  const br2 =
    cA[4] && cA[5] ? `2BR: ${cA[4]}–${cA[5]}` : cA[4] ? `2BR: ${cA[4]}` : null;
  const br3 =
    cA[5] && cA[6] ? `3BR: ${cA[5]}–${cA[6]}` : cA[5] ? `3BR: ${cA[5]}` : null;
  const br4 =
    cA[7] && cA[8] ? `4BR: ${cA[7]}–${cA[8]}` : cA[7] ? `4BR: ${cA[7]}` : null;
  const br5 =
    cA[9] && cA[10]
      ? `5BR: ${cA[9]}–${cA[10]}`
      : cA[9]
      ? `5BR: ${cA[9]}`
      : null;
  const brsArray = [studio, br1, br2, br3, br4, br5];
  const brsString = brsArray.filter(n => n).join("\r\n");
  // console.log(brsString);
  return brsString;
};

export const onSubmitFailFn = errors => scrollToFirstError(errors);
