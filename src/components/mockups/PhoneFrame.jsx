import { IconBattery, IconSignal, IconWifi } from '../Icons'

export default function PhoneFrame({
  children,
  size = '',
  dark = false,
  lightStatus = false,
  time = '10:36',
  className = '',
  style,
}) {
  return (
    <div
      className={`phone${size ? ` phone--${size}` : ''}${dark ? ' phone--dark' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={style}
    >
      <div className="phone__screen">
        <span className="phone__notch" />
        <div className={`phone__status${lightStatus ? ' phone__status--light' : ''}`}>
          <span>{time}</span>
          <span className="phone__signal">
            <IconSignal width="11" height="11" />
            <IconWifi width="11" height="11" />
            <IconBattery width="15" height="15" />
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}
