---
to: src/pages/<%= name %>Page/<%= name %>Page.tsx
---
import React from 'react';

import s from './<%= name %>.module.css';

export interface I<%= name %>PagePropsType {}

const <%= name %>Page = (props: I<%= name %>PagePropsType) => {
  return <div className={s.root}><%= name %> page</div>
}

export default <%= name %>Page;