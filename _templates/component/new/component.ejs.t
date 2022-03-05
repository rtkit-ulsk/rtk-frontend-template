---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from 'react';

import s from './<%= name %>.module.css';

export interface I<%= name %>PropsType {}

const <%= name %> = (props: I<%= name %>PropsType) => {
  return <div className={s.root}><%= name %> component</div>
}

export default <%= name %>;