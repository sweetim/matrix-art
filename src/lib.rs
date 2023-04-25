mod utils;
mod spiral;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
#[allow(non_snake_case)]
pub fn inWard_cw(n: i32) -> js_sys::Array {
    spiral::in_ward_cw(n)
        .into_iter()
        .map(wasm_bindgen::JsValue::from)
        .collect()
}

#[wasm_bindgen]
#[allow(non_snake_case)]
pub fn inWard_ccw(n: i32) -> js_sys::Array {
    spiral::in_ward_ccw(n)
        .into_iter()
        .map(wasm_bindgen::JsValue::from)
        .collect()
}

#[wasm_bindgen]
#[allow(non_snake_case)]
pub fn outWard_cw(n: i32) -> js_sys::Array {
    spiral::out_ward_cw(n, None)
        .into_iter()
        .map(wasm_bindgen::JsValue::from)
        .collect()
}
