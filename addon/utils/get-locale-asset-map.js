import { importSync } from '@embroider/macros';
import { assert } from '@ember/debug';

export function getLocaleAssetMap() {
  // FastBoot cannot read from document, so we require a (specifically built) file in that scenario
  if (typeof FastBoot !== 'undefined') {
    let assetMap = importSync('ember-l10n/fastboot-locale-asset-map');
    return assetMap.default;
  }

  let metaTag = document.querySelector(
    "meta[name='ember-l10n:localeAssetMap']"
  );
  if (!metaTag || !metaTag.content) {
    assert('<meta name="ember-l10n:localeAssetMap"> tag is missing.', false);
    return {};
  }

  let assetMapString = metaTag.content;
  return JSON.parse(decodeURIComponent(assetMapString));
}
