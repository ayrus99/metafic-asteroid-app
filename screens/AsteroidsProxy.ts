// Stores the currently-being-typechecked object for error messages.
let obj: any = null
export class AsteroidsProxy {
  public readonly links: LinksProxy
  public readonly page: PageProxy
  public readonly near_earth_objects: NearEarthObjectsEntityProxy[] | null
  public static Parse(d: string): AsteroidsProxy {
    return AsteroidsProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): AsteroidsProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.links = LinksProxy.Create(d.links, field + '.links')
    d.page = PageProxy.Create(d.page, field + '.page')
    checkArray(d.near_earth_objects, field + '.near_earth_objects')
    if (d.near_earth_objects) {
      for (let i = 0; i < d.near_earth_objects.length; i++) {
        d.near_earth_objects[i] = NearEarthObjectsEntityProxy.Create(
          d.near_earth_objects[i],
          field + '.near_earth_objects' + '[' + i + ']',
        )
      }
    }
    if (d.near_earth_objects === undefined) {
      d.near_earth_objects = null
    }
    return new AsteroidsProxy(d)
  }
  private constructor(d: any) {
    this.links = d.links
    this.page = d.page
    this.near_earth_objects = d.near_earth_objects
  }
}

export class LinksProxy {
  public readonly next: string
  public readonly self: string
  public static Parse(d: string): LinksProxy {
    return LinksProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): LinksProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.next, false, field + '.next')
    checkString(d.self, false, field + '.self')
    return new LinksProxy(d)
  }
  private constructor(d: any) {
    this.next = d.next
    this.self = d.self
  }
}

export class PageProxy {
  public readonly size: number
  public readonly total_elements: number
  public readonly total_pages: number
  public readonly number: number
  public static Parse(d: string): PageProxy {
    return PageProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): PageProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkNumber(d.size, false, field + '.size')
    checkNumber(d.total_elements, false, field + '.total_elements')
    checkNumber(d.total_pages, false, field + '.total_pages')
    checkNumber(d.number, false, field + '.number')
    return new PageProxy(d)
  }
  private constructor(d: any) {
    this.size = d.size
    this.total_elements = d.total_elements
    this.total_pages = d.total_pages
    this.number = d.number
  }
}

export class NearEarthObjectsEntityProxy {
  public readonly links: Links1Proxy
  public readonly id: string
  public readonly neo_reference_id: string
  public readonly name: string
  public readonly name_limited: string
  public readonly designation: string
  public readonly nasa_jpl_url: string
  public readonly absolute_magnitude_h: number
  public readonly estimated_diameter: EstimatedDiameterProxy
  public readonly is_potentially_hazardous_asteroid: boolean
  public readonly close_approach_data: CloseApproachDataEntityProxy[] | null
  public readonly orbital_data: OrbitalDataProxy
  public readonly is_sentry_object: boolean
  public static Parse(d: string): NearEarthObjectsEntityProxy {
    return NearEarthObjectsEntityProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root',
  ): NearEarthObjectsEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.links = Links1Proxy.Create(d.links, field + '.links')
    checkString(d.id, false, field + '.id')
    checkString(d.neo_reference_id, false, field + '.neo_reference_id')
    checkString(d.name, false, field + '.name')
    checkString(d.name_limited, false, field + '.name_limited')
    checkString(d.designation, false, field + '.designation')
    checkString(d.nasa_jpl_url, false, field + '.nasa_jpl_url')
    checkNumber(d.absolute_magnitude_h, false, field + '.absolute_magnitude_h')
    d.estimated_diameter = EstimatedDiameterProxy.Create(
      d.estimated_diameter,
      field + '.estimated_diameter',
    )
    checkBoolean(
      d.is_potentially_hazardous_asteroid,
      false,
      field + '.is_potentially_hazardous_asteroid',
    )
    checkArray(d.close_approach_data, field + '.close_approach_data')
    if (d.close_approach_data) {
      for (let i = 0; i < d.close_approach_data.length; i++) {
        d.close_approach_data[i] = CloseApproachDataEntityProxy.Create(
          d.close_approach_data[i],
          field + '.close_approach_data' + '[' + i + ']',
        )
      }
    }
    if (d.close_approach_data === undefined) {
      d.close_approach_data = null
    }
    d.orbital_data = OrbitalDataProxy.Create(
      d.orbital_data,
      field + '.orbital_data',
    )
    checkBoolean(d.is_sentry_object, false, field + '.is_sentry_object')
    return new NearEarthObjectsEntityProxy(d)
  }
  private constructor(d: any) {
    this.links = d.links
    this.id = d.id
    this.neo_reference_id = d.neo_reference_id
    this.name = d.name
    this.name_limited = d.name_limited
    this.designation = d.designation
    this.nasa_jpl_url = d.nasa_jpl_url
    this.absolute_magnitude_h = d.absolute_magnitude_h
    this.estimated_diameter = d.estimated_diameter
    this.is_potentially_hazardous_asteroid = d.is_potentially_hazardous_asteroid
    this.close_approach_data = d.close_approach_data
    this.orbital_data = d.orbital_data
    this.is_sentry_object = d.is_sentry_object
  }
}

export class Links1Proxy {
  public readonly self: string
  public static Parse(d: string): Links1Proxy {
    return Links1Proxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): Links1Proxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.self, false, field + '.self')
    return new Links1Proxy(d)
  }
  private constructor(d: any) {
    this.self = d.self
  }
}

export class EstimatedDiameterProxy {
  public readonly kilometers: KilometersOrMetersOrMilesOrFeetProxy
  public readonly meters: KilometersOrMetersOrMilesOrFeetProxy
  public readonly miles: KilometersOrMetersOrMilesOrFeetProxy
  public readonly feet: KilometersOrMetersOrMilesOrFeetProxy
  public static Parse(d: string): EstimatedDiameterProxy {
    return EstimatedDiameterProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): EstimatedDiameterProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.kilometers = KilometersOrMetersOrMilesOrFeetProxy.Create(
      d.kilometers,
      field + '.kilometers',
    )
    d.meters = KilometersOrMetersOrMilesOrFeetProxy.Create(
      d.meters,
      field + '.meters',
    )
    d.miles = KilometersOrMetersOrMilesOrFeetProxy.Create(
      d.miles,
      field + '.miles',
    )
    d.feet = KilometersOrMetersOrMilesOrFeetProxy.Create(
      d.feet,
      field + '.feet',
    )
    return new EstimatedDiameterProxy(d)
  }
  private constructor(d: any) {
    this.kilometers = d.kilometers
    this.meters = d.meters
    this.miles = d.miles
    this.feet = d.feet
  }
}

export class KilometersOrMetersOrMilesOrFeetProxy {
  public readonly estimated_diameter_min: number
  public readonly estimated_diameter_max: number
  public static Parse(d: string): KilometersOrMetersOrMilesOrFeetProxy {
    return KilometersOrMetersOrMilesOrFeetProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root',
  ): KilometersOrMetersOrMilesOrFeetProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkNumber(
      d.estimated_diameter_min,
      false,
      field + '.estimated_diameter_min',
    )
    checkNumber(
      d.estimated_diameter_max,
      false,
      field + '.estimated_diameter_max',
    )
    return new KilometersOrMetersOrMilesOrFeetProxy(d)
  }
  private constructor(d: any) {
    this.estimated_diameter_min = d.estimated_diameter_min
    this.estimated_diameter_max = d.estimated_diameter_max
  }
}

export class CloseApproachDataEntityProxy {
  public readonly close_approach_date: string
  public readonly close_approach_date_full: string
  public readonly epoch_date_close_approach: number
  public readonly relative_velocity: RelativeVelocityProxy
  public readonly miss_distance: MissDistanceProxy
  public readonly orbiting_body: string
  public static Parse(d: string): CloseApproachDataEntityProxy {
    return CloseApproachDataEntityProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root',
  ): CloseApproachDataEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.close_approach_date, false, field + '.close_approach_date')
    checkString(
      d.close_approach_date_full,
      false,
      field + '.close_approach_date_full',
    )
    checkNumber(
      d.epoch_date_close_approach,
      false,
      field + '.epoch_date_close_approach',
    )
    d.relative_velocity = RelativeVelocityProxy.Create(
      d.relative_velocity,
      field + '.relative_velocity',
    )
    d.miss_distance = MissDistanceProxy.Create(
      d.miss_distance,
      field + '.miss_distance',
    )
    checkString(d.orbiting_body, false, field + '.orbiting_body')
    return new CloseApproachDataEntityProxy(d)
  }
  private constructor(d: any) {
    this.close_approach_date = d.close_approach_date
    this.close_approach_date_full = d.close_approach_date_full
    this.epoch_date_close_approach = d.epoch_date_close_approach
    this.relative_velocity = d.relative_velocity
    this.miss_distance = d.miss_distance
    this.orbiting_body = d.orbiting_body
  }
}

export class RelativeVelocityProxy {
  public readonly kilometers_per_second: string
  public readonly kilometers_per_hour: string
  public readonly miles_per_hour: string
  public static Parse(d: string): RelativeVelocityProxy {
    return RelativeVelocityProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): RelativeVelocityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(
      d.kilometers_per_second,
      false,
      field + '.kilometers_per_second',
    )
    checkString(d.kilometers_per_hour, false, field + '.kilometers_per_hour')
    checkString(d.miles_per_hour, false, field + '.miles_per_hour')
    return new RelativeVelocityProxy(d)
  }
  private constructor(d: any) {
    this.kilometers_per_second = d.kilometers_per_second
    this.kilometers_per_hour = d.kilometers_per_hour
    this.miles_per_hour = d.miles_per_hour
  }
}

export class MissDistanceProxy {
  public readonly astronomical: string
  public readonly lunar: string
  public readonly kilometers: string
  public readonly miles: string
  public static Parse(d: string): MissDistanceProxy {
    return MissDistanceProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): MissDistanceProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.astronomical, false, field + '.astronomical')
    checkString(d.lunar, false, field + '.lunar')
    checkString(d.kilometers, false, field + '.kilometers')
    checkString(d.miles, false, field + '.miles')
    return new MissDistanceProxy(d)
  }
  private constructor(d: any) {
    this.astronomical = d.astronomical
    this.lunar = d.lunar
    this.kilometers = d.kilometers
    this.miles = d.miles
  }
}

export class OrbitalDataProxy {
  public readonly orbit_id: string
  public readonly orbit_determination_date: string
  public readonly first_observation_date: string
  public readonly last_observation_date: string
  public readonly data_arc_in_days: number
  public readonly observations_used: number
  public readonly orbit_uncertainty: string
  public readonly minimum_orbit_intersection: string
  public readonly jupiter_tisserand_invariant: string
  public readonly epoch_osculation: string
  public readonly eccentricity: string
  public readonly semi_major_axis: string
  public readonly inclination: string
  public readonly ascending_node_longitude: string
  public readonly orbital_period: string
  public readonly perihelion_distance: string
  public readonly perihelion_argument: string
  public readonly aphelion_distance: string
  public readonly perihelion_time: string
  public readonly mean_anomaly: string
  public readonly mean_motion: string
  public readonly equinox: string
  public readonly orbit_class: OrbitClassProxy
  public static Parse(d: string): OrbitalDataProxy {
    return OrbitalDataProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): OrbitalDataProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.orbit_id, false, field + '.orbit_id')
    checkString(
      d.orbit_determination_date,
      false,
      field + '.orbit_determination_date',
    )
    checkString(
      d.first_observation_date,
      false,
      field + '.first_observation_date',
    )
    checkString(
      d.last_observation_date,
      false,
      field + '.last_observation_date',
    )
    checkNumber(d.data_arc_in_days, false, field + '.data_arc_in_days')
    checkNumber(d.observations_used, false, field + '.observations_used')
    checkString(d.orbit_uncertainty, false, field + '.orbit_uncertainty')
    checkString(
      d.minimum_orbit_intersection,
      false,
      field + '.minimum_orbit_intersection',
    )
    checkString(
      d.jupiter_tisserand_invariant,
      false,
      field + '.jupiter_tisserand_invariant',
    )
    checkString(d.epoch_osculation, false, field + '.epoch_osculation')
    checkString(d.eccentricity, false, field + '.eccentricity')
    checkString(d.semi_major_axis, false, field + '.semi_major_axis')
    checkString(d.inclination, false, field + '.inclination')
    checkString(
      d.ascending_node_longitude,
      false,
      field + '.ascending_node_longitude',
    )
    checkString(d.orbital_period, false, field + '.orbital_period')
    checkString(d.perihelion_distance, false, field + '.perihelion_distance')
    checkString(d.perihelion_argument, false, field + '.perihelion_argument')
    checkString(d.aphelion_distance, false, field + '.aphelion_distance')
    checkString(d.perihelion_time, false, field + '.perihelion_time')
    checkString(d.mean_anomaly, false, field + '.mean_anomaly')
    checkString(d.mean_motion, false, field + '.mean_motion')
    checkString(d.equinox, false, field + '.equinox')
    d.orbit_class = OrbitClassProxy.Create(
      d.orbit_class,
      field + '.orbit_class',
    )
    return new OrbitalDataProxy(d)
  }
  private constructor(d: any) {
    this.orbit_id = d.orbit_id
    this.orbit_determination_date = d.orbit_determination_date
    this.first_observation_date = d.first_observation_date
    this.last_observation_date = d.last_observation_date
    this.data_arc_in_days = d.data_arc_in_days
    this.observations_used = d.observations_used
    this.orbit_uncertainty = d.orbit_uncertainty
    this.minimum_orbit_intersection = d.minimum_orbit_intersection
    this.jupiter_tisserand_invariant = d.jupiter_tisserand_invariant
    this.epoch_osculation = d.epoch_osculation
    this.eccentricity = d.eccentricity
    this.semi_major_axis = d.semi_major_axis
    this.inclination = d.inclination
    this.ascending_node_longitude = d.ascending_node_longitude
    this.orbital_period = d.orbital_period
    this.perihelion_distance = d.perihelion_distance
    this.perihelion_argument = d.perihelion_argument
    this.aphelion_distance = d.aphelion_distance
    this.perihelion_time = d.perihelion_time
    this.mean_anomaly = d.mean_anomaly
    this.mean_motion = d.mean_motion
    this.equinox = d.equinox
    this.orbit_class = d.orbit_class
  }
}

export class OrbitClassProxy {
  public readonly orbit_class_type: string
  public readonly orbit_class_description: string
  public readonly orbit_class_range: string
  public static Parse(d: string): OrbitClassProxy {
    return OrbitClassProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): OrbitClassProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.orbit_class_type, false, field + '.orbit_class_type')
    checkString(
      d.orbit_class_description,
      false,
      field + '.orbit_class_description',
    )
    checkString(d.orbit_class_range, false, field + '.orbit_class_range')
    return new OrbitClassProxy(d)
  }
  private constructor(d: any) {
    this.orbit_class_type = d.orbit_class_type
    this.orbit_class_description = d.orbit_class_description
    this.orbit_class_range = d.orbit_class_range
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, 'non-nullable object', false)
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable)
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable)
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, 'array', true)
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'number' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'number', nullable)
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'boolean' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'boolean', nullable)
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'string' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'string', nullable)
  }
}
function errorHelper(
  field: string,
  d: any,
  type: string,
  nullable: boolean,
): never {
  if (nullable) {
    type += ', null, or undefined'
  }
  throw new TypeError(
    'Expected ' +
      type +
      ' at ' +
      field +
      ' but found:\n' +
      JSON.stringify(d) +
      '\n\nFull object:\n' +
      JSON.stringify(obj),
  )
}
