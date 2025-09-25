"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface DetailSection {
  title: string
  items: Array<{
    label: string
    value: string | number | React.ReactNode
    icon?: React.ReactNode
  }>
}

interface ActionButton {
  label: string
  onClick: () => void
  variant?: "default" | "destructive" | "outline" | "secondary"
  className?: string
}

interface DetailViewProps {
  title: string
  subtitle?: string
  avatar?: {
    src?: string
    fallback: string
  }
  sections: DetailSection[]
  actions: ActionButton[]
  onBack: () => void
  className?: string
}

export function DetailView({ title, subtitle, avatar, sections, actions, onBack, className }: DetailViewProps) {
  return (
    <div className={cn("min-h-screen bg-[#01151C] text-white", className)}>
      {/* Header */}
      <div className="bg-teal-800/30 p-4 md:p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-teal-700/30">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>

        <div className="text-center space-y-4">
          {avatar && (
            <Avatar className="h-24 w-24 mx-auto">
              <AvatarImage src={avatar.src || "/placeholder.svg"} alt={title} />
              <AvatarFallback className="bg-teal-700 text-white text-2xl">{avatar.fallback}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {subtitle && <p className="text-teal-200 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6">
        {/* Sections */}
        {sections.map((section, index) => (
          <Card key={index} className="bg-[#01151C] border-teal-700/30">
            <CardHeader>
              <CardTitle className="text-white">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span className="text-slate-300">{item.label}</span>
                  </div>
                  <div className="text-white font-medium">
                    {typeof item.value === "string" || typeof item.value === "number" ? (
                      item.label.toLowerCase().includes("status") ? (
                        <Badge variant={getStatusVariant(String(item.value))}>{item.value}</Badge>
                      ) : (
                        item.value
                      )
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Actions */}
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "default"}
              onClick={action.onClick}
              className={cn(
                "w-full",
                action.variant === "default" && "bg-teal-600 hover:bg-teal-700",
                action.variant === "destructive" &&
                  "bg-red-600/20 border border-red-600/50 text-red-400 hover:bg-red-600/30",
                action.className,
              )}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  const statusLower = status.toLowerCase()
  switch (statusLower) {
    case "approved":
    case "active":
    case "verified":
    case "in stock":
      return "default"
    case "pending":
      return "secondary"
    case "rejected":
    case "suspended":
      return "destructive"
    default:
      return "outline"
  }
}
