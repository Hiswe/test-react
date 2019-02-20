# Test React by Hiswe

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [install & run](#install--run)
- [process & principles](#process--principles)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## install & run

- [node](https://nodejs.org/en/) >= 10.15.0
- [yarn](https://yarnpkg.com/lang/en/) >= 1.13.0

```sh
yarn install && yarn start
```

server will be running on `localhost:3000`

## process & principles

Process:

- begin small & dirty
- iterate
- iterate
- iterate

Principles: Keep It Simple, Stupid

- no state manager:
  - overkill for now
  - can be integrated easily if needed
- no CSS-in-JS:
  - overkill for now
  - can be integrated easily if needed
  - everybody understand CSS with [BEM](http://getbem.com/introduction/)
- follow the conventions
  - React tends to get out of the `Class` pattern
  - Use functions and newly introduced hooks
- components are extracted to a bare minimun.
  They can be extended/refined if needed (like the price)
