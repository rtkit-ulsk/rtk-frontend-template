---
to: src/store/store.ts
inject: true
after: "// auto-import-api"
---
import { <%= name %>Api } from 'services/api/<%= name %>.api';