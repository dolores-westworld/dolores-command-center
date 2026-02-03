# URL Routing (Skills)

## How routing works
- If an input contains a URL (matched by `skills/router.yaml:url_detection.regex`), we route link-reading to a skill.
- Domain routing:
  - `x.com` or `twitter.com` → `x_link_reader`
  - anything else → `link_reader_generic`

## Blocked / login-required behavior
- If the link reader reports `availability=blocked` or `login_required`, we **stop**.
- We do not guess or invent content.

## User-paste fallback
- Request the user to paste the content.
- Set `cite_source_type=user_paste` and summarize only from the pasted text.
