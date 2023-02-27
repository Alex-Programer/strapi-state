# strapi state manager for v4

## About state manager

## I hope so：

### auto request

```typescript
<script lang='ts' setup>
const { list, loading } = useVue<TODO>({
  baseURL: "http://localhost:1337/",
  contentType: "todo-collections",
});
</script>


<template>
  <div v-if='loading.list'>loading...</div>
  <ul v-else>
    <li v-for="item in list">{{ item.content }}</li>
  </ul>
</template>
```

### manual request

```typescript
<script lang='ts' setup>
const { list, loading, load } = useVue<TODO>({
  baseURL: "http://localhost:1337/",
  contentType: "todo-collections",
  auto: false
});
</script>


<template>
  <button @click="load">load</button>
  <div v-if='loading.list'>loading...</div>
  <ul v-else>
    <li v-for="item in list">{{ item.content }}</li>
  </ul>
</template>
```

### create & update

```typescript
<script lang='ts' setup>
interface TODO {
  done: boolean;
  content: string;
}

const { loading, create, update } = useVue<TODO>({
  baseURL: "http://localhost:1337/",
  contentType: "todo-collections",
});

const onCreate = () => {
  create({ done: false, content: 'hello world' })
}

const onUpdate = () => {
  update({ id: '', done: false, content: 'hello world' });
}
</script>


<template>
  <div v-if='loading.creating'>creating...</div>
  <button v-else @click="onCreate">create</button>
</template>
```

> You can use `useReact` api instead of it for React Hook Component.
