# Geocoder.configure(

  # Geocoding options
  # timeout: 3,                 # geocoding service timeout (secs)
  # lookup: :nominatim,         # name of geocoding service (symbol)
  # ip_lookup: :ipinfo_io,      # name of IP address geocoding service (symbol)
  # language: :en,              # ISO-639 language code
  # use_https: true,           # use HTTPS for lookup requests? (if supported)
  # http_proxy: nil,            # HTTP proxy server (user:pass@host:port)
  # https_proxy: nil,           # HTTPS proxy server (user:pass@host:port)
  # api_key: nil,               # API key for geocoding service
  # cache: nil,                 # cache object (must respond to #[], #[]=, and #del)
  # cache_prefix: 'geocoder:',  # DEPRECATED, please use cache_options[:prefix] instead
  # # mapbox => {:dataset => "mapbox.places-permanent"}

  # Exceptions that should not be rescued by default
  # (if you want to implement custom error handling);
  # supports SocketError and Timeout::Error
  # always_raise: [],

  # Calculation options
  # units: :mi,                 # :km for kilometers or :mi for miles
  # distances: :linear          # :spherical or :linear

  # Cache configuration
  # cache_options: {
  #   expiration: 2.days,
  #   prefix: 'geocoder:'
  # }

# )

Geocoder.configure(
  # street address geocoding service (default :nominatim)
  lookup: :yandex,

  # IP address geocoding service (default :ipinfo_io)
  ip_lookup: :maxmind,

  # to use an API key:
  api_key: "...",

  # geocoding service request timeout, in seconds (default 3):
  timeout: 5,

  # set default units to kilometers:
  units: :km,

  # caching (see Caching section below for details):
  # warning: `cache_prefix` is deprecated, use `cache_options` instead
  cache: Redis.new,
  cache_options: {
    expiration: 1.day, # Defaults to `nil`
    prefix: "another_key:" # Defaults to `geocoder:`
  }
)
