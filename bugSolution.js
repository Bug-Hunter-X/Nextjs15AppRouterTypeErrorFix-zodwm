```javascript
// pages/index.js

import { MetadataRoute } from 'next/server';

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
    </div>
  );
}

export const metadata = {
  title: 'My Next.js 15 App',
};
```