"use client"
import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

interface MapProps {
  center: [number, number]
  zoom?: number
}

export function Map({ center, zoom = 12 }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center,
      zoom,
      scrollZoom: false,
      attributionControl: false,
    })

    new maplibregl.Marker({ color: "#cc9a6e" })
      .setLngLat(center)
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(
          `<div style="font-family:var(--font-montserrat);font-size:13px"><strong>Maswood</strong><br/>Karinska 19, Beograd</div>`
        )
      )
      .addTo(mapRef.current)

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
}
