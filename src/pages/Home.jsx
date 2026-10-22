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
        body="Now you can make and receive video or voice calls right from your browser."
        linkLabel="Try it"
        linkHref={LINKS.web}
        media={<WebMockup />}
      />

      <Greetings />

      <FeatureSplit
        id="calling"
        title="Never miss a moment with voice and"
        highlight="video calls"
        body="From a quick catch-up with a classmate to a long call with family, feel like you're in the same room with free voice and video calls."
        linkHref={LINKS.calling}
        media={<CallMockup />}
      />

      <FeatureSplit
        id="security"
        dark
        reverse
        title="Speak"
        highlight="freely"
        body="Your messages and calls travel over encrypted connections, calls are never recorded, and there are no ads or trackers in your chats. You decide who sees each status update."
        linkHref={LINKS.privacy}
        media={<EncryptedMockup />}
      />

      <DownloadBand />
    </main>
  )
}
