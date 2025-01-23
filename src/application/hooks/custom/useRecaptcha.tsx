import { useCallback, useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export const useRecaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const recaptchaRef = useRef<ReCAPTCHA | null>(null)
  //TODO: Вынеси в .env
  const siteKey = '6LdHxG4qAAAAAPKRxEHrlV5VvLFHIf2BO5NMI8YM'

  const handleRecaptcha = useCallback((token: null | string) => {
    setCaptchaToken(token || '')
  }, [])

  useEffect(() => {
    const refreshCaptcha = () => {
      if (recaptchaRef.current && captchaToken) {
        recaptchaRef.current.reset()
        setCaptchaToken('')
      }
    }

    // let tokenRefreshTimeout: NodeJS.Timeout | null = null

    if (captchaToken) {
      // tokenRefreshTimeout = setTimeout(refreshCaptcha, 110000) // 110 seconds
    }

    return () => {
      // if (tokenRefreshTimeout) {
      //   clearTimeout(tokenRefreshTimeout)
      // }
    }
  }, [captchaToken])

  return { captchaToken, handleRecaptcha, recaptchaRef, setCaptchaToken, siteKey }
}
