// Type definitions for Mapbox GL JS v0.18.0
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace mapboxgl {
	let accessToken: string;
	export function supported(): boolean;

	/**
	 * Map
	 */
	export class Map extends Evented {
		constructor(options?: MapboxOptions);

		addControl(control: Control): this;

		addClass(klass: string, options?: mapboxgl.StyleOptions): this;

		removeClass(klass: string, options?: mapboxgl.StyleOptions): this;

		setClasses(klasses: string[], options?: mapboxgl.StyleOptions): this;

		hasClass(klass: string): boolean;

		getClasses(): string[];

		resize(): this;

		getBounds(): mapboxgl.LngLatBounds;

		setMaxBounds(lnglatbounds?: mapboxgl.LngLatBounds | number[][]): this;

		setMinZoom(minZoom: number): this;

		setMaxZoom(maxZoom: number): this;

		project(lnglat: mapboxgl.LngLat): { x: number, y: number };

		unproject(point: number[]): mapboxgl.LngLat;

		queryRenderedFeatures(pointOrBox?: mapboxgl.Point|mapboxgl.Point[]|number[][], params?: {layers?: string[], filter?: any[]}): GeoJSON.Feature<GeoJSON.GeometryObject>[];

		querySourceFeatures(sourceID: string, params: {sourceLayer?: string, filter?: any[]}): Object[];

		setStyle(style: mapboxgl.Style): this;

		getStyle(): mapboxgl.Style;

		addSource(id: string, source: VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw): this;

		removeSource(id: string): this;

		getSource(id: string): VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource;

		addLayer(layer: mapboxgl.Layer, before?: string): this;

		removeLayer(id: string): this;

		getLayer(id: string): mapboxgl.Layer;

		setFilter(layer: string, filter: any[]): this;

		setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;

		getFilter(layer: string): any[];

		setPaintProperty(layer: string, name: string, value: any, klass?: string): this;

		getPaintProperty(layer: string, name: string, klass?: string): any;

		setLayoutProperty(layer: string, name: string, value: any): this;

		getLayoutProperty(layer: string, name: string, klass?: string): any;

		getContainer(): HTMLElement;

		getCanvasContainer(): HTMLElement;

		getCanvas(): HTMLElement;

		loaded(): boolean;

		remove(): void;

		onError(): void;

		showTileBoundaries: boolean;

		showCollisionBoxes: boolean;

		repaint: boolean;

		getCenter(): mapboxgl.LngLat;

		setCenter(center: LngLat, eventData?: mapboxgl.EventData): this;

		panBy(offset: number[], options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		panTo(lnglat: mapboxgl.LngLat, options?: mapboxgl.AnimationOptions, eventdata?: mapboxgl.EventData): this;

		getZoom(): number;

		setZoom(zoom: number, eventData?: mapboxgl.EventData): this;

		zoomTo(zoom: number, options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		zoomIn(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		zoomOut(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		getBearing(): number;

		setBearing(bearing: number, eventData?: mapboxgl.EventData): this;

		rotateTo(bearing: number, options?: mapboxgl.AnimationOptions, eventData?: EventData): this;

		resetNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		snapToNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		getPitch(): number;

		setPitch(pitch: number, eventData?: EventData): this;

		fitBounds(bounds: mapboxgl.LngLatBounds | number[][], options: { linear?: boolean, easing?: Function, padding?: number, maxZoom?: number }): this;

		jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;

		easeTo(options: mapboxgl.CameraOptions | mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

		flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): this;

		stop(): this;

		scrollZoom: ScrollZoomHandler;

		boxZoom: BoxZoomHandler;

		dragRotate: DragRotateHandler;

		dragPan: DragPanHandler;

		keyboard: KeyboardHandler;

		doublClickZoom: DoubleClickZoomHandler;

		touchZoomRotate: TouchZoomRotateHandler;
	}

	export interface MapboxOptions {
		/** If true, enable the "pinch to rotate and zoom" interaction (see TouchZoomRotateHandler). */
		touchZoomRotate?: boolean;

		/** initial map center */
		center?: mapboxgl.LngLat | number[];

		/** Initial zoom level */
		zoom?: number;

		/** Minimum zoom of the map */
		minZoom?: number;

		/** Maximum zoom of the map */
		maxZoom?: number;

		/** stylesheet location */
		style?: mapboxgl.Style | string;

		/** If true, the map will track and update the page URL according to map position */
		hash?: boolean;

		/** If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input */
		interactive?: boolean;

		/** Snap to north threshold in degrees. */
		bearingSnap?: number;

		bearing?: number;
		
		pitch?: number;

		/** Style class names with which to initialize the map */
		classes?: string[];

		/** If true, an attribution control will be added to the map. */
		attributionControl?: boolean;

		/** ID of the container element */
		container?: string | Element;

		/** If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization. */
		preserveDrawingBuffer?: boolean;

		/** If set, the map is constrained to the given bounds. */
		maxBounds?: mapboxgl.LngLatBounds | number[][];

		/** If true, enable the "scroll to zoom" interaction */
		scrollZoom?: boolean;

		/** If true, enable the "box zoom" interaction (see BoxZoomHandler) */
		boxZoom?: boolean;

		/** If true, enable the "drag to rotate" interaction (see DragRotateHandler). */
		dragRotate?: boolean;

		/** If true, enable the "drag to pan" interaction (see DragPanHandler). */
		dragPan?: boolean;

		/** If true, enable keyboard shortcuts (see KeyboardHandler). */
		keyboard?: boolean;

		/** If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler). */
		doubleClickZoom?: boolean;

		/** If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected. */
		failIfMayorPerformanceCaveat?: boolean;
	}

	/**
	 * Control
	 */
	export class Control {
		addTo(map: mapboxgl.Map): this;

		remove(): this;
	}

	/**
	 * BoxZoomHandler
	 */
	export class BoxZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * ScrollZoomHandler
	 */
	export class ScrollZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DragPenHandler
	 */
	export class DragPanHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DragRotateHandler
	 */
	export class DragRotateHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		isActive(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * KeyboardHandler
	 */
	export class KeyboardHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * DoubleClickZoomHandler
	 */
	export class DoubleClickZoomHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;
	}

	/**
	 * TouchZoomRotateHandler
	 */
	export class TouchZoomRotateHandler {
		constructor(map: mapboxgl.Map);

		isEnabled(): boolean;

		enable(): void;

		disable(): void;

		disableRotation(): void;

		enableRotation(): void;
	}

	/**
	 * ControlOptions
	 */
	export interface ControlOptions {
		position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	}

	/**
	 * Navigation
	 */
	export class Navigation extends Control {
		constructor(options?: mapboxgl.ControlOptions);
	}

	/**
	 * Geolocate
	 */
	export class Geolocate extends Control {
		constructor(options?: mapboxgl.ControlOptions);
	}

	/**
	 * Attribution
	 */
	export class Attribution extends Control {
		constructor(options?: mapboxgl.ControlOptions);
	}

	/**
	 * Popup
	 */
	export class Popup {
		constructor(options?: mapboxgl.PopupOptions);

		addTo(map: mapboxgl.Map): this;

		remove(): this;

		getLngLat(): mapboxgl.LngLat;

		setLngLat(lnglat: mapboxgl.LngLat | number[]): this;

		setText(text: string): this;

		setHTML(html: string): this;

		setDOMContent(htmlNode: Node): this;
	}

	export interface PopupOptions {
		closeButton?: boolean;

		closeOnClick?: boolean;

		anchor?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	}

	export interface Style {
		bearing?: number;
		center?: Array<number>;
		glyphs?: string;
		layers?: Array<Layer>;
		metadata?: any;
		name?: string;
		pitch?: number;
		sources?: any;
		sprite?: string;
		transition?: Transition;
		version: number;
		zoom?: number;
	}

	export interface Transition {
		delay?: number;
		duration?: number;
	}

	export interface Source {
		type: "vector" | "raster" | "geojson" | "image" | "video";
	}



	/**
	 * GeoJSONSource
	 */
	export class GeoJSONSource implements Source {
		type: "geojson";

		constructor(options?: mapboxgl.GeoJSONSourceOptions);

		setData(data: GeoJSON.Feature<GeoJSON.GeometryObject> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | String): this;
	}

	export interface GeoJSONSourceOptions {
		data?: GeoJSON.Feature<GeoJSON.GeometryObject> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | string;

		maxzoom?: number;

		buffer?: number;

		tolerance?: number;

		cluster?: number | boolean;

		clusterRadius?: number;

		clusterMaxZoom?: number;
	}
	
	export interface GeoJSONSourceRaw extends Source, GeoJSONSourceOptions {
		type: "geojson";
	}

	/**
	 * VideoSource
	 */
	export class VideoSource implements Source {
		type: "video";

		constructor(options?: mapboxgl.VideoSourceOptions);

		getVideo(): Object;

		setCoordinates(coordinates: number[][]): this;
	}

	export interface VideoSourceOptions {
		urls?: string[];

		coordinates?: number[][];
	}

	/**
	 * ImageSource
	 */
	export class ImageSource implements Source {
		type: "image";

		constructor(options?: mapboxgl.ImageSourceOptions);

		setCoordinates(coordinates: number[][]): this;
	}

	export interface ImageSourceOptions {
		url?: string;

		coordinates?: number[][];
	}

	interface VectorSource extends Source {
		type: "vector";
		url: string;
	}

	interface RasterSource extends Source {
		type: "raster";
		url: string;
		tileSize: number
	}

	/**
	 * LngLat
	 */
	export class LngLat {
		lng: number;
		lat: number;

		constructor(lng: number, lat: number);

		/** Return a new LngLat object whose longitude is wrapped to the range (-180, 180). */
		wrap(): mapboxgl.LngLat;

		/** Return a LngLat as an array */
		toArray(): number[];

		/** Return a LngLat as a string */
		toString(): string;

		static convert(input: number[]|mapboxgl.LngLat): mapboxgl.LngLat;
	}

	/**
	 * LngLatBounds
	 */
	export class LngLatBounds {
		constructor(sw?: LngLat, ne?: LngLat);

		/** Extend the bounds to include a given LngLat or LngLatBounds. */
		extend(obj: mapboxgl.LngLat | mapboxgl.LngLatBounds): this;

		/** Get the point equidistant from this box's corners */
		getCenter(): mapboxgl.LngLat;

		/** Get southwest corner */
		getSouthWest(): mapboxgl.LngLat;

		/** Get northeast corner */
		getNorthEast(): mapboxgl.LngLat;

		/** Get northwest corner */
		getNorthWest(): mapboxgl.LngLat;

		/** Get southeast corner */
		getSouthEast(): mapboxgl.LngLat;

		/** Get west edge longitude */
		getWest(): number;

		/** Get south edge latitude */
		getSouth(): number;

		/** Get east edge longitude */
		getEast(): number;

		/** Get north edge latitude */
		getNorth(): number;

		/** Returns a LngLatBounds as an array */
		toArray(): number[][];

		/** Return a LngLatBounds as a string */
		toString(): string;

		/** Convert an array to a LngLatBounds object, or return an existing LngLatBounds object unchanged. */
		static convert(input: mapboxgl.LngLatBounds | number[] | number[][]): mapboxgl.LngLatBounds;
	}

	/**
	 * Point
	 */
		// Todo: Pull out class to seperate definition for Module "point-geometry"
	export class Point {
		constructor(options?: Object);

		clone(): Point;

		add(p: number): Point;

		sub(p: number): Point;

		mult(k: number): Point;

		div(k: number): Point;

		rotate(a: number): Point;

		matMult(m: number): Point;

		unit(): Point;

		perp(): Point;

		round(): Point;

		mag(): number;

		equals(): boolean;

		dist(): number;

		distSqr(): number;

		angle(): number;

		angleTo(): number;

		angleWidth(): number;

		angleWidthSep(): number;
	}

	export class Marker {
		constructor(element?: HTMLElement);

		addTo(map: Map): this;

		remove(): this;

		getLngLat(): LngLat;

		setLngLat(lngLat: LngLat): this;
	}

	/**
	 * Evented
	 */
	export class Evented {
		on(type: string, listener: Function): this;

		off(type?: string | any, listener?: Function): this;

		once(type: string, listener: Function): this;

		fire(type: string, data?: mapboxgl.EventData | Object): this;

		listens(type: string): boolean;
	}

	/**
	 * StyleOptions
	 */
	export interface StyleOptions {
		options?: any;
	}

	/**
	 * EventData
	 */
	export class EventData {
		type: string;
		target: Map;
		originalEvent: Event;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat;
	}

	export class MapMouseEvent {
		type: string;
		target: Map;
		originalEvent: MouseEvent;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat;
	}

	export class MapTouchEvent {
		type: string;
		target: Map;
		originalEvent: TouchEvent;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat;
		points: Array<Point>;
		lngLats: Array<LngLat>;
	}

	export class MapBoxZoomEvent {
		originalEvent: MouseEvent;
		boxZoomBounds: LngLatBounds;
	}

	/**
	 * AnimationOptions
	 */
	export interface AnimationOptions {
		/** Number in milliseconds */
		duration?: number;
		easing?: Function;
		/** point, origin of movement relative to map center */
		offset?: number[];
		/** When set to false, no animation happens */
		animate?: boolean;
	}

	/**
	 * CameraOptions
	 */
	export interface CameraOptions {
		/** Map center */
		center?: mapboxgl.LngLat | number[];
		/** Map zoom level */
		zoom?: number;
		/** Map rotation bearing in degrees counter-clockwise from north */
		bearing?: number;
		/** Map angle in degrees at which the camera is looking at the ground */
		pitch?: number;
		/** If zooming, the zoom center (defaults to map center) */
		around?: mapboxgl.LngLat;
	}

	/**
	 * FlyToOptions
	 */
	export interface FlyToOptions extends AnimationOptions, CameraOptions {
		curve?: number;
		minZoom?: number;
		speed?: number;
		screenSpeed?: number;
		easing?: Function;
	}

	/**
	 * MapEvent
	 */
	export interface MapEvent {
		webglcontextlost?: {originalEvent: WebGLContextEvent};
		webglcontextrestored?: {originalEvent: WebGLContextEvent};
		render?: void;
		contextmenu?: {data: mapboxgl.MapMouseEvent};
		dblclick?: {data: mapboxgl.MapMouseEvent};
		click?: {data: mapboxgl.MapMouseEvent};
		touchcancel?: {data: mapboxgl.MapTouchEvent};
		touchmove?: {data: mapboxgl.MapTouchEvent};
		touchend?: {data: mapboxgl.MapTouchEvent};
		touchstart?: {data: mapboxgl.MapTouchEvent};
		mousemove?: {data: mapboxgl.MapMouseEvent};
		mouseup?: {data: mapboxgl.MapMouseEvent};
		mousedown?: {data: mapboxgl.MapMouseEvent};
		moveend?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		move?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		movestart?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		mouseout?:{data: mapboxgl.MapMouseEvent};
		load?: void;
		zoomend?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		zoom?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		zoomstart?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		boxzoomcancel?: {data: mapboxgl.MapBoxZoomEvent};
		boxzoomstart?: {data: mapboxgl.MapBoxZoomEvent};
		boxzoomend?: {data: mapboxgl.MapBoxZoomEvent};
		rotate?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		rotatestart?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		rotateend?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		drag?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		dragend?: {data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent};
		pitch?: {data: mapboxgl.EventData};
	}
	
	export interface Layer {
		id: string;
		type?: "fill" | "line" | "symbol" | "circle" | "raster" | "background" | string; //TODO: Ideally we wouldn't accept string here, just these specific strings

		//metadata
		ref?: string;

		source?: string;

		"source-layer"?: string;

		minzoom?: number;
		maxzoom?: number;

		interactive?: boolean;

		filter?: Array<any>;
		layout?: BackgroundLayout | FillLayout | LineLayout | SymbolLayout | RasterLayout | CircleLayout;
		paint?: BackgroundPaint | FillPaint | LinePaint | SymbolPaint | RasterPaint | CirclePaint;
	}

	export interface StyleFunction {
		stops: Array<Array<any>>;
		property?: string;
		base?: number;
		type?: "continuous" | "interval" | "categorical";
	}

	export interface BackgroundLayout {
		visibility?: "visible" | "none";
	}
	export interface BackgroundPaint {
		"background-color"?: string;
		"background-pattern"?: string;
		"background-opacity"?: number;
	}

	export interface FillLayout {
		visibility?: "visible" | "none";
	}
	export interface FillPaint {
		"fill-antialias"?: boolean;
		"fill-opacity"?: number | StyleFunction;
		"fill-color"?: string | StyleFunction;
		"fill-outline-color": string | StyleFunction;
		"fill-translate"?: Array<number>;
		"fill-translate-anchor"?: "map" | "viewport";
		"fill-pattern"?: "string";
	}

	export interface LineLayout {
		visibility?: "visible" | "none";

		"line-cap"?: "butt" | "round" | "square";
		"line-join"?: "bevel" | "round" | "miter";
		"line-miter-limit"?: number;
		"line-round-limit"?: number;
	}
	export interface LinePaint {
		"line-opacity"?: number;
		"line-color"?: string;
		"line-translate"?: Array<number>;
		"line-translate-anchor"?: "map" | "viewport";
		"line-width"?: number;
		"line-gap-width"?: number;
		"line-offset"?: number;
		"line-blur"?: number;
		"line-dasharray"?: Array<number>;
		"line-pattern"?: string;
	}

	export interface SymbolLayout {
		visibility?: "visible" | "none";

		"symbol-placement"?: "point" | "line";
		"symbol-spacing"?: number;
		"symbol-avoid-edges"?: boolean;
		"icon-allow-overlap"?: boolean;
		"icon-ignore-placement"?: boolean;
		"icon-optional"?: boolean;
		"icon-rotation-alignment"?: "map" | "viewport";
		"icon-size"?: number;
		"icon-text-fit"?: "none" | "both" | "width" | "height";
		"icon-text-fit-padding"?: Array<number>;
		"icon-image"?: string;
		"icon-rotate"?: number | StyleFunction;
		"icon-padding"?: number;
		"icon-keep-upright"?: boolean;
		"icon-offset"?: Array<number>;
		"text-pitch-alignment"?: "map" | "viewport";
		"text-rotation-alignment"?: "map" | "viewport";
		"text-field"?: string;
		"text-font"?: string;
		"text-size"?: number;
		"text-max-width"?: number;
		"text-line-height"?: number;
		"text-letter-spacing"?: number;
		"text-justify"?: "left" | "center" | "right";
		"text-anchor"?: "center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
		"text-max-angle"?: number;
		"text-rotate"?: number;
		"text-padding"?: number;
		"text-keep-upright"?: boolean;
		"text-transform"?: "none" | "uppercase" | "lowercase";
		"text-offset"?: Array<number>;
		"text-allow-overlap"?: boolean;
		"text-ignore-placement"?: boolean;
		"text-optional"?: boolean;

	}
	export interface SymbolPaint {
		"icon-opacity"?: number;
		"icon-color"?: string;
		"icon-halo-color"?: string;
		"icon-halo-width"?: number;
		"icon-halo-blur"?: number;
		"icon-translate"?: Array<number>;
		"icon-translate-anchor"?: "map" | "viewport";
		"text-opacity"?: number;
		"text-color"?: "string";
		"text-halo-color"?: "string";
		"text-halo-width"?: number;
		"text-halo-blur"?: number;
		"text-translate"?: Array<number>;
		"text-translate-anchor"?: "map" | "viewport";
	}

	export interface RasterLayout {
		visibility?: "visible" | "none";
	}

	export interface RasterPaint {
		"raster-opacity"?: number;
		"raster-hue-rotate"?: number;
		"raster-brightness-min"?: number;
		"raster-brightness-max"?: number;
		"raster-saturation"?: number;
		"raster-contrast"?: number;
		"raster-fade-duration"?: number;
	}

	export interface CircleLayout {
		visibility?: "visible" | "none";
	}

	export interface CirclePaint {
		"circle-radius"?: number | StyleFunction;
		"circle-color"?: number | StyleFunction;
		"circle-blur"?: number | StyleFunction;
		"circle-opacity"?: number | StyleFunction;
		"circle-translate"?: Array<number>;
		"circle-translate-anchor"?: "map" | "viewport";
		"circle-pitch-scale"?: "map" | "viewport";
	}
}

declare module 'mapbox-gl' {
	export = mapboxgl;
}
