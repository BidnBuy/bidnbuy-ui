"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function OnboardingHero = () {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#01151C" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/onboarding-ui-img.jpg"
          alt="Happy BidnBuy user giving thumbs up"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay to darken the image and make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01151C]/90 via-[#01151C]/70 to-[#01151C]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Welcome to Africa's Most <span className="block">Innovative Digital Economy</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8" style={{ fontFamily: "Open Sans, sans-serif" }}>
            Bid. Win. Save Big - One Deal at a Time
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Explore Live Bids
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#01151C] px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 bg-transparent"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
