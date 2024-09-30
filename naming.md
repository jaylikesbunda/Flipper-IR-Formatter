# Comprehensive IRDB (Infrared Database) Naming Standards

## 1. Button Name Standardization

### Universal Remote Standard (Primary)

|     TVs     |   Audio   |     ACs     |
|:-----------:|:---------:|:-----------:|
|   `Power`   |  `Power`  |    `Off`    |
|  `Vol_up`   | `Vol_up`  | `Cool_hi`   |
|  `Vol_dn`   | `Vol_dn`  | `Cool_lo`   |
| `Ch_next`   |  `Next`   | `Heat_hi`   |
| `Ch_prev`   |  `Prev`   | `Heat_lo`   |
|   `Mute`    |  `Mute`   |    `Dh`     |
|             |  `Play`   |             |
|             |  `Pause`  |             |

### XRemote Additional Standard Buttons

| Navigation | Functions |   Media   |  Other  |
|:----------:|:---------:|:---------:|:-------:|
|    `Up`    |  `Eject`  | `Fast_fo` | `Menu`  |
|   `Down`   |  `Setup`  | `Fast_ba` | `List`  |
|   `Left`   |  `Input`  | `Play_pa` | `Info`  |
|  `Right`   |  `Back`   |  `Stop`   | `Mode`  |
|    `Ok`    |           |           |         |

### Detailed Button Name Mapping

#### TV Buttons

| Standard Name |        Alternative Names         |
|:-------------:|:--------------------------------:|
|    `Power`    | pwr, pw, p, on_off, on/off, standby, stby, switch, sw, toggle, tgl, powr |
|   `Vol_up`    | v_up, v+, vu, volume_up, vol_increase, vol_inc, vol+, louder, volume_raise, audio_up, au_up |
|   `Vol_dn`    | vol_down, v_down, v-, vd, volume_down, vol_decrease, vol_dec, vol_dwn, vol-, softer, volume_lower, audio_down, au_dn |
|  `Ch_next`    | ch_up, ch+, c_up, c+, cu, channel_up, next_channel, channel_forward, ch_fwd, prog_up, program_up, p_up, pu |
|  `Ch_prev`    | ch_down, ch_dn, ch-, c_down, c_dn, c-, cd, channel_down, previous_channel, channel_back, ch_bk, prog_down, program_down, p_down, p_dn, pd |
|    `Mute`     | mu, mt, silence, sil, quiet, qt, audio_off, sound_off, no_sound, mte |

#### Audio Buttons

| Standard Name |        Alternative Names         |
|:-------------:|:--------------------------------:|
|    `Power`    | (Same as TV) |
|   `Vol_up`    | (Same as TV) |
|   `Vol_dn`    | (Same as TV) |
|    `Next`     | nxt, nx, n, skip_fwd, sk_f, forward, fwd, ff, fast_forward, track_forward, tr_fwd, next_track, skip_ahead |
|    `Prev`     | previous, prv, pr, skip_back, sk_b, rewind, rew, rw, back, bk, track_back, tr_bk, previous_track, skip_previous |
|    `Play`     | pl, ply, start, strt, resume, rsm, begin, bgn, playback, pb |
|    `Pause`    | pse, ps, hold, hld, freeze, frz, suspend, spnd, break, brk |
|    `Mute`     | (Same as TV) |

#### AC Buttons

| Standard Name |        Alternative Names         |
|:-------------:|:--------------------------------:|
|     `Off`     | of, power, shutdown, shtdwn, shut_down, power_off, pwr_off, pw_off, p_off, turn_off, switch_off, sw_off |
|     `Dh`      | dehumidify, dehum, dhum, dry, dehumid, moisture_remove, mst_rmv, humidity_control, hum_ctrl, water_remove, wtr_rmv |
|  `Cool_hi`    | ch, cool_high, high_cool, hi_cool, max_cool, cool_max, strong_cool, str_cool |
|  `Cool_lo`    | cl, cool_low, low_cool, min_cool, cool_min, gentle_cool, gnt_cool |
|  `Heat_hi`    | hh, heat_high, high_heat, hi_heat, max_heat, heat_max, strong_heat, str_heat |
|  `Heat_lo`    | hl, heat_low, low_heat, min_heat, heat_min, gentle_heat, gnt_heat |

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

3. **Compress Files**: If submitting multiple files, compress them into a `.zip` archive while preserving the folder structure.

4. **Provide Contact**: Include your contact information or GitHub username if others need to reach out for clarifications (optional).

5. **License Agreement**: By submitting, you agree that your contributions can be used and distributed under the project's license terms.

## 6. Example IR File Structure

An example of a properly formatted `.ir` file:
```
Filetype: IR signals file
Version: 1
#
# Brand: Harman Kardon
# Device Model: AVI200
# Device Type: Audio and Video Receiver
#
name: Power
type: parsed
protocol: NECext
address: 80 70 00 00
command: C0 3F 00 00
#

name: Power type: parsed protocol: NEC address: 0xE0E0 command: 0x20DF

name: Vol_up type: parsed protocol: NEC address: 0xE0E0 command: 0xE01F

name: Vol_dn
```

