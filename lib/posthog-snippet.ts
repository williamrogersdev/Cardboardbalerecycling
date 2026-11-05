// PostHog for this site: 1DB's project (1db), loaded first-party through
// /ingest on this domain (1DB site_analytics.md). Rendered once, in the root layout.
export const POSTHOG_SNIPPET = `!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Yi en init gn bn Qr mn wn fn capture calculateEventProperties In register register_once register_for_session unregister unregister_for_session Rn getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Pn identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty En kn createPersonProfile setInternalOrTestUser Mn dn Fn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing xn debug Kr Tn getPageViewId captureTraceFeedback captureTraceMetric ln".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
// Visitors in Europe (by timezone) or with a browser privacy signal are counted
// without cookies or storage on their device (1DB site_analytics.md)
var tz = ''
try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '' } catch (e) {}
var anonymous = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' ||
  ['Europe', 'Arctic'].indexOf(tz.split('/')[0]) >= 0 ||
  ['Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Madeira', 'Atlantic/Reykjavik'].indexOf(tz) >= 0
posthog.init('phc_ykfgZMBbSjPBkTKZXSoXMVD37vPtufbT2QNjxEsvwCWd', {
  api_host: '/ingest',
  ui_host: 'https://us.posthog.com',
  defaults: '2026-08-30',
  person_profiles: 'identified_only',
  cookieless_mode: anonymous ? 'always' : undefined,
  disable_session_recording: true,
  disable_surveys: true,
})
posthog.register({ site: location.hostname.replace(/^www[.]/, '') })
`
