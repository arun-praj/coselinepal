import React from "react"
import { Shield, Lock, Eye, Database, Phone } from "lucide-react"

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">Last updated: December 27, 2024</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Introduction
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to our privacy policy. We respect your privacy and are
            committed to protecting your personal information. This privacy
            policy will inform you about how we handle your data in accordance
            with Nepal&apos;s Electronic Transaction Act 2063 (2008) and other
            applicable laws.
          </p>
        </div>

        {/* Key Sections */}
        <div className="space-y-6">
          <Section
            icon={<Eye className="w-6 h-6" />}
            title="Information We Collect"
            content={`
              We collect information that you provide directly to us, including:
              • Name, email address, and contact information
              • Billing and delivery address
              • Payment information (processed securely through authorized payment gateways)
              • Shopping preferences and history
              • Device information and IP address
            `}
          />

          <Section
            icon={<Database className="w-6 h-6" />}
            title="How We Use Your Information"
            content={`
              We use your information for:
              • Processing and fulfilling your orders
              • Communicating about your purchases
              • Improving our services and user experience
              • Sending promotional materials (with your consent)
              • Complying with legal obligations
              All data processing activities comply with Nepal's data protection requirements.
            `}
          />

          <Section
            icon={<Lock className="w-6 h-6" />}
            title="Data Security"
            content={`
              We implement appropriate security measures to protect your personal information:
              • Encryption of sensitive data
              • Regular security assessments
              • Limited access to personal information
              • Secure data storage within Nepal or in compliant international facilities
              We follow industry best practices and Nepal's cybersecurity guidelines.
            `}
          />

          <Section
            icon={<Phone className="w-6 h-6" />}
            title="Contact Us"
            content={`
              If you have any questions about this Privacy Policy, please contact us:
              • Email: privacy@coselinepal.com
              • Phone: +977-XX-XXXXXXX
              • Address: Kathmandu, Nepal
              
              You have the right to request access to your personal data and to ask for corrections or deletions as per Nepal's data protection laws.
            `}
          />
        </div>

        {/* Footer */}
        <div className="mt-12">
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              This privacy policy is compliant with Nepal&apos;s Electronic
              Transaction Act 2063 (2008) and other applicable laws. We reserve
              the right to update this policy, and any changes will be posted on
              this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Section Component
interface SectionProps {
  icon: React.ReactNode
  title: string
  content: string
}

const Section: React.FC<SectionProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 transition-colors">
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-zinc-900 dark:text-zinc-100">{icon}</div>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      </div>
      <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  )
}

export default PrivacyPolicy
