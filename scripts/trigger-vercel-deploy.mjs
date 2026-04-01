/**
 * POSTs to a Vercel Deploy Hook URL (same as Sanity webhook target).
 * Use to verify the hook works before or after wiring Sanity → Webhooks.
 *
 *   VERCEL_DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/..." node scripts/trigger-vercel-deploy.mjs
 */
const url = process.env.VERCEL_DEPLOY_HOOK_URL;

if (!url || !/^https:\/\//.test(url)) {
  console.error(
    'Set VERCEL_DEPLOY_HOOK_URL to your Vercel Deploy Hook (Project → Settings → Git → Deploy Hooks).'
  );
  process.exit(1);
}

const res = await fetch(url, { method: 'POST' });

if (!res.ok) {
  console.error(`Deploy hook failed: ${res.status} ${res.statusText}`);
  const text = await res.text();
  if (text) console.error(text);
  process.exit(1);
}

console.log('Deploy hook accepted. Check Vercel dashboard for the new deployment.');
