# Comprehensive IRDB (Infrared Database) Naming Standards

## 1. Button Name Standardization

### Universal Remote Standard (Primary)

|     TVs     |   Audio   |     ACs     |    Fans    |    LEDs    |  Monitors  | Digital Signs |
|:-----------:|:---------:|:-----------:|:----------:|:----------:|:----------:|:-------------:|
|   `Power`   |  `Power`  |    `Off`    |  `Power`   |  `Power`   |  `Power`   |    `Power`    |
|  `Vol_up`   | `Vol_up`  | `Cool_hi`   | `Speed_up` | `Bright+`  |  `Source`  |   `Source`    |
|  `Vol_dn`   | `Vol_dn`  | `Cool_lo`   | `Speed_dn` | `Bright-`  |   `Menu`   |    `Play`     |
| `Ch_next`   |  `Next`   | `Heat_hi`   |  `Mode`    |  `Flash`   |   `Exit`   |    `Stop`     |
| `Ch_prev`   |  `Prev`   | `Heat_lo`   | `Rotate`   |            |            |               |
|   `Mute`    |  `Mute`   |    `Dh`     |  `Timer`   |            |            |               |
|             |  `Play`   |             |            |            |            |               |
|             |  `Pause`  |             |            |            |            |               |

### XRemote Additional Standard Buttons

| Navigation | Functions |   Media   |  Other  |
|:----------:|:---------:|:---------:|:-------:|
|    `Up`    |  `Eject`  | `Fast_fo` | `Menu`  |
|   `Down`   |  `Setup`  | `Fast_ba` | `List`  |
|   `Left`   |  `Input`  | `Play_pa` | `Info`  |
|  `Right`   |  `Back`   |  `Stop`   | `Mode`  |
|    `Ok`    |           |           |         |

### Jay's Button Names

WORK IN PROGRESS... Extra standard button names for consistency across additions to IRDB

|     TVs     |   Audio   |     ACs     |    Fans    |    LEDs    |  Monitors  | Digital Signs |
|:-----------:|:---------:|:-----------:|:----------:|:----------:|:----------:|:-------------:|
|   `Smart`   |   `Bass`  |   `Swing`   |   `Nat`    |  `Color`   |   `PIP`    |   `Sched`     |
|   `Guide`   | `Treble`  |    `Fan`    |  `Night`   |   `Tone`   | `Freeze`   |   `Layout`    |
|    `PIP`    |    `EQ`   |    `Eco`    |   `Humid`  |    `FX`    |   `ECO`    |   `Update`    |
|    `Fav`    | `Repeat`  |   `Turbo`   |    `Ion`   |   `Sync`   | `Aspect`   |    `Zoom`     |
|    `CC`     | `Shuffle` |   `Quiet`   |            | `Preset`   |  `Split`   |    `Lock`     |
|  `Aspect`   |           |   `Sleep`   |            |            |            |               |

### Button Renaming

#### TV Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Vol_up`      | volume_up, vol+, louder, audio_up, vol_up, volup, vol^, v+ |
| `Vol_dn`      | volume_down, vol-, quieter, audio_down, vol_dwn, voldn, voldown, v- |
| `Ch_next`     | channel_up, ch+, prog+, tune_up, chnl_up, ch^, c+, chan+ |
| `Ch_prev`     | channel_down, ch-, prog-, tune_down, chnl_dwn, chdn, c-, chan- |
| `Mute`        | mute_toggle, silent, audio_mute, mut, slnt, mte |
| `Source`      | input, tv/av, mode, signal, src, inpt, tv_av |
| `Menu`        | home, smart_hub, settings, mnu, stngs, hme |
| `Exit`        | back, return, close, ext, bck, rtrn, cls |
| `Up`          | arrow_up, navigate_up, u, ^, arrowup, nav_up |
| `Down`        | arrow_down, navigate_down, d, v, arrowdn, nav_dwn |
| `Left`        | arrow_left, navigate_left, l, <, arrowlft, nav_lft |
| `Right`       | arrow_right, navigate_right, r, >, arrowrgt, nav_rgt |
| `Ok`          | enter, select, confirm, entr, slct, cnfrm |

#### Audio Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Vol_up`      | volume_up, vol+, louder, audio_up, vol_up, volup, vol^, v+ |
| `Vol_dn`      | volume_down, vol-, quieter, audio_down, vol_dwn, voldn, voldown, v- |
| `Next`        | track_next, skip_forward, fast_forward, nxt, skp_fwd, ff |
| `Prev`        | track_prev, skip_backward, rewind, prv, skp_bck, rwd |
| `Play`        | start_playback, resume, ply, strt_plybck, rsm |
| `Pause`       | pause_playback, break, paus, pse, brk |
| `Stop`        | end_playback, halt, stp, end_plybck, hlt |
| `Mute`        | mute_toggle, silent, audio_mute, mut, slnt, mte |
| `Source`      | input, mode, function, src, inpt, fnc |
| `Bass`        | bass_adjust, low_freq, bas, lo_frq |
| `Treble`      | treble_adjust, high_freq, trbl, hi_frq |
| `EQ`          | equalizer, sound_mode, audio_preset, eq, snd_mode, aud_prst |

#### AC Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Cool_hi`     | cool_high, max_cool, cooling_high, cool_hi, max_cl, coolhi |
| `Cool_lo`     | cool_low, eco_cool, cooling_low, cool_lo, eco_cl, coollo |
| `Heat_hi`     | heat_high, max_heat, heating_high, heat_hi, max_ht, heathi |
| `Heat_lo`     | heat_low, eco_heat, heating_low, heat_lo, eco_ht, heatlo |
| `Dh`          | dehumidify, dry_mode, moisture_remove, dehum, dry_md, moist_rmv |
| `Fan`         | fan_speed, air_flow, ventilate, fn_spd, air_flw, vent |
| `Swing`       | air_direction, louver, vane, swng, air_dir, lvr |
| `Turbo`       | jet, powerful, boost, trbo, pwrfl, bst |
| `Quiet`       | silent, whisper, low_noise, qiet, slnt, lo_noise |
| `Sleep`       | night_mode, eco_night, timer, slp, nght_md, eco_nght |

#### Fan Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Speed_up`    | faster, increase_speed, wind_up, spd_up, inc_spd, wind^ |
| `Speed_dn`    | slower, decrease_speed, wind_down, spd_dn, dec_spd, windv |
| `Mode`        | function, air_flow, fan_mode, mod, fnc, air_flw |
| `Rotate`      | oscillate, swing, scan, rot, osc, swng |
| `Timer`       | auto_off, schedule, delay_off, tmr, auto_of, sched |
| `Nat`         | natural_wind, breeze, simulate, natrl, brz, sim |
| `Humid`       | humidify, mist, vapor, hum, mst, vpr |

#### LED Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Bright+`     | brightness_up, brighter, intensify, brt+, brght_up, intnsfy |
| `Bright-`     | brightness_down, dimmer, soften, brt-, brght_dn, sftn |
| `Color`       | color_change, hue, tint, clr, hue_chng, tnt |
| `Tone`        | temperature, warmth, kelvin, tmp, wrm, klvn |
| `FX`          | effect, animate, dynamic, fx, efct, anim |
| `Sync`        | music_mode, rhythm, sound_active, sync, msc_md, rythm |
| `Preset`      | scene, mode, theme, prst, scn, thm |

#### Monitor Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Source`      | input, input_select, mode, src, inpt_slct, mod |
| `Menu`        | osd, on_screen_display, settings, mnu, onscreen, stngs |
| `Exit`        | close, esc, return, ext, cls, rtrn |
| `PIP`         | picture_in_picture, multi_view, pip, pic_in_pic, mlti_vw |
| `Freeze`      | still, pause_screen, hold, frz, paus_scrn, hld |
| `ECO`         | energy_save, power_save, efficiency, eco, nrg_save, pwr_save |
| `Aspect`      | ratio, screen_fit, zoom, aspt, scrn_fit, zm |
| `Split`       | screen_split, dual_view, multi_screen, splt, dual_vw, mlti_scrn |

#### Digital Signs Buttons

| Standard Name |        Acceptable Alternatives         |
|:-------------:|:--------------------------------------:|
| `Power`       | pwr, powr, pover, powe, pw, p (only if it's a true power toggle) |
| `On`          | turn_on, power_on, start, trn_on, pwr_on, strt |
| `Off`         | turn_off, power_off, shutdown, trn_off, pwr_off, shtdwn |
| `Source`      | input, input_select, mode, src, inpt_slct, mod |
| `Play`        | start_content, run, begin, ply, strt_cntnt, bgn |
| `Stop`        | end_content, halt, terminate, stp, end_cntnt, trmnate |
| `Sched`       | schedule, timer, program, schd, tmr, prgm |
| `Layout`      | display_mode, screen_layout, format, lyt, scrn_lyt, frmt |
| `Update`      | refresh, sync_content, reload, updt, rfsh, sync_cntnt |
| `Zoom`        | scale, resize, magnify, zm, rsize, mgnfy |
| `Lock`        | keypad_lock, child_lock, security, lck, chld_lck, scrty |


## 2. File Naming Convention

|       Format       |           Example           |
|:------------------:|:---------------------------:|
| `Brand_Model.ir`   | `Samsung_UN55NU7100.ir`     |
|                    | `Sony_TV_DVDCB.ir`          |
|                    | `UnknownBrand_32inchLEDTV.ir` |
|                    | `Universal_TV_Remote_Model123.ir` |

### Guidelines:

- Use underscore (`_`) to separate words
- Include brand name first, followed by model
- For unknown brands or models, use descriptive names
- Omit device type from filename (include in metadata)

## 3. Metadata and Commenting

### Comment Format

All metadata should be placed at the beginning of the file, with each piece of information on a new comment line, following this format:
```
#
# Brand: [Brand]
# Device Model: [Device Model]
# Remote Model: [Remote Model]
# Device Type: [Device Type]
# Protocol: [Protocol]
# Link: [URL]
# Description: [Brief description]
# Contributor: [Your Name]
#
```

- Ensure there is an empty comment line (`#`) before and after the metadata section for clarity.

## 4. General Guidelines

- **Consistency**: Always adhere to the naming conventions and standards outlined in this document to maintain consistency across the database.

- **Case Sensitivity**: Button names and metadata fields should be in the exact case as specified (e.g., `Vol_up`, `Brand`).

- **Special Characters**: Avoid using special characters or spaces in filenames and button names. Use underscores (`_`) to separate words.

- **Unknown Information**: If certain metadata fields are unknown, they can be omitted except for the required fields.

- **Comment Lines**: Use `#` at the beginning of a line to denote a comment in the `.ir` file.

## 5. Submission Process

When contributing to the IRDB:

1. **Format Files**: Ensure your `.ir` files are formatted according to the standards in this document.

2. **Verify Data**: Double-check all metadata and button names for accuracy.

## 6. Example IR File Structure

An example of a properly formatted `.ir` file:
```
Filetype: IR signals file
Version: 1
#
# Brand: Viano
# Remote Model: STV65UHD4K
# Device Type: TV
#
name: Power
type: parsed
protocol: NECext
address: 00 7F 00 00
command: 1E E1 00 00
#
```
