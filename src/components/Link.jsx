const Link = ({
  href,
  title,
  text,
  linkClass,
  iconClass,

}) => {
  return (
    <a
      className={linkClass}
      href={href}
      title={title}
      >
      <div className="link-container">
        {!!iconClass && (
          <div className={iconClass} />
        )}
          {text}
      </div>
    </a>
  )
}

export default Link