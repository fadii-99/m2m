import Hero from '../components/Hero'
import FeatureSplit from '../components/FeatureSplit'
import Greetings from '../components/Greetings'
import DownloadBand from '../components/DownloadBand'

import WebMockup from '../components/mockups/WebMockup'
import CallMockup from '../components/mockups/CallMockup'
import EncryptedMockup from '../components/mockups/EncryptedMockup'

import { LINKS } from '../config/links'

export default function Home() {
  return (
    <main>
      <Hero />

      <FeatureSplit
        id="features"
        tight
        reverse
        title="New! Call on"
        highlight="M2M Web"
        body="Now you can make and receive video or voice calls  one-on-one or in groups  right from your browser."
        linkLabel="Try it"
        linkHref={LINKS.web}
        media={<WebMockup />}
      />

      <Greetings />

      <FeatureSplit
        id="calling"
        title="Never miss a moment with voice and"
        highlight="video calls"
        body="From a group call with classmates to a quick call with family, feel like you're in the same room with free voice and video calls."
        linkHref={LINKS.calling}
        media={<CallMockup />}
      />

      <FeatureSplit
        id="security"
        dark
        reverse
        title="Speak"
        highlight="freely"
        body="With end-to-end encryption on M2M, your personal messages and calls are secured with a lock. Only you and the person you're talking to can read or listen to them, and no one else  not even M2M."
        linkHref={LINKS.security}
        media={<EncryptedMockup />}
      />

      <DownloadBand />
    </main>
  )
}
