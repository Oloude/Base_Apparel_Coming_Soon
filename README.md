# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com)

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleEmail(value: string) {
    setEmail(value.trim());
    validatedEmail(value.trim());
  }

  function validatedEmail(value: string) {
    if (regex.test(value)) {
      setError("");
    } else {
      setError("Please provide a valid email");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!error && email) {
      console.log("Form submitted with email:", email);
    } else {
      setError("Please provide a valid email before submitting");
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${
          error ? "border-softRed" : "border-desaturatedRed"
        } border  rounded-full pl-3 pr-28 py-2 flex items-center justify-between relative `}
      >
        <input
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="text-darkRed text-lg bg-inherit p-2 outline-none placeholder:text-desaturatedRed"
        />
        {error && <img src={errorIcon} alt="" />}
        <button className="bg-gradient-to-r from-linearFrom to-linearTo py-5  px-10 -right-4 rounded-full absolute">
          <img src={arrowIcon} alt="" />
        </button>
      </form>
      <span className="text-sm text-softRed">{error}</span>
    </div>
  );
}
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
