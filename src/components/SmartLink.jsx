import { Link } from 'react-router-dom'
import { INTERNAL } from '../config/links'

/**
 * Renders a router <Link> for in-app routes and a plain <a> for everything
 * else (external sites, #anchors), so every call site can just pass `href`.
 */
export default function SmartLink({ href = '#', children, ...rest }) {
  if (INTERNAL.has(href)) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }

  const external = /^https?:\/\//.test(href)

  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}
