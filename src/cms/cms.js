import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import RhizomaticThinkingPagePreview from './preview-templates/RhizomaticThinkingPagePreview'
import ConnectPagePreview from './preview-templates/ConnectPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('rhizomatic-thinking', RhizomaticThinkingPagePreview)
CMS.registerPreviewTemplate('connect', ConnectPagePreview)
