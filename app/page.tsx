"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Zap, Activity, BarChart3, Rocket, Star } from "lucide-react"

export default function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const yamlCode = `pipeline:
  stages:
    - build
    - test
    - deploy
  
  optimization:
    enabled: true
    metrics: real-time`

  const features = [
    {
      icon: Zap,
      title: "Pipeline Acceleration",
      description: "Supercharge your CI/CD workflows with intelligent optimization and parallel execution strategies.",
    },
    {
      icon: Activity,
      title: "Infrastructure Monitoring",
      description: "Real-time visibility into your entire DevOps ecosystem with advanced monitoring and alerting.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Deep insights into pipeline performance, bottlenecks, and optimization opportunities.",
    },
    {
      icon: Rocket,
      title: "Automated Deployment",
      description: "Seamless deployment automation with zero-downtime rollouts and intelligent rollback capabilities.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "OptiCore Analytics reduced our deployment time by 60%. The real-time insights are game-changing.",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Lead at CloudScale",
      content: "Best DevOps platform we've used. The automation features alone have saved us countless hours.",
      avatar: "/professional-man.jpg",
    },
    {
      name: "Emily Watson",
      role: "Engineering Manager at DataSync",
      content: "Incredible performance monitoring. We identified and fixed bottlenecks we didn't even know existed.",
      avatar: "/professional-woman-glasses.png",
    },
  ]

  const pricingTiers = [
    {
      name: "Basic",
      price: "$299",
      description: "Perfect for small teams getting started",
      features: ["Up to 10 pipelines", "Basic monitoring", "Email support", "7-day data retention", "Community access"],
    },
    {
      name: "Pro",
      price: "$799",
      description: "Best for growing development teams",
      features: [
        "Unlimited pipelines",
        "Advanced monitoring & alerts",
        "Priority 24/7 support",
        "90-day data retention",
        "Custom integrations",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations at scale",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom SLA",
        "Unlimited data retention",
        "On-premise deployment",
        "White-label options",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
            >
              OptiCore Analytics
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerChildren}>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
              >
                Accelerate Your{" "}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  DevOps Pipeline
                </span>{" "}
                Success
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-purple-200/80 mb-8 leading-relaxed">
                Fuel your development velocity with expert optimization
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0 text-lg px-8"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400/30 text-purple-200 hover:bg-purple-500/10 hover:text-purple-100 bg-transparent"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* YAML Code Snippet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative group">
                {/* Glassmorphism Card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-sm text-purple-300/60 ml-2 font-mono">pipeline.yml</span>
                  </div>
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-purple-300">{yamlCode}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Scale Fast
              </span>
            </h2>
            <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
              Powerful features designed for modern DevOps teams
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-slate-900/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-purple-200/70 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                DevOps Teams
              </span>
            </h2>
            <p className="text-xl text-purple-200/70">See what our customers are saying</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-slate-900/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-purple-100/90 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-purple-300/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-purple-200/70">Choose the perfect plan for your team</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-6"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full relative ${tier.popular ? "bg-gradient-to-b from-purple-900/50 to-indigo-900/50 border-purple-400/50 shadow-2xl shadow-purple-500/20" : "bg-slate-900/50 border-purple-500/20"} backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                    <p className="text-purple-200/70 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-purple-300/70">/month</span>}
                    </div>
                    <Button
                      className={`w-full mb-8 ${tier.popular ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                    >
                      Get Started
                    </Button>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-purple-100/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500/30 backdrop-blur-xl">
              <div className="p-12 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-white">
                  Ready to Transform Your DevOps?
                </h2>
                <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams already accelerating their pipelines with OptiCore Analytics
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0 text-lg px-12"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-12 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-purple-300/60">© 2025 OptiCore Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
