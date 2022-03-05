---
to: src/store/store.ts
inject: true
after: "// auto-reducer"
---
    [<%= name %>Api.reducerPath]: <%= name %>Api.reducer,