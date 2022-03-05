---
to: src/store/store.ts
inject: true
after: "// auto-import"
---
import <%= name %>Reducer from './slices/<%= name %>Slice';