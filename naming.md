# Comprehensive IRDB (Infrared Database) Naming Standards

## 1. Button Name Standardization

### Universal Remote Standard (Primary)

| TVs       | Audio    | ACs       |
|:---------:|:--------:|:---------:|
| `Power`   | `Power`  | `Off`     |
| `Vol_up`  | `Vol_up` | `Cool_hi` |
| `Vol_dn`  | `Vol_dn` | `Cool_lo` |
| `Ch_next` | `Next`   | `Heat_hi` |
| `Ch_prev` | `Prev`   | `Heat_lo` |
| `Mute`    | `Mute`   | `Dh`      |
|           | `Play`   |           |
|           | `Pause`  |           |

### XRemote Additional Standard Buttons

| Navigation | Functions | Media    | Other   |
|:----------:|:---------:|:--------:|:-------:|
| `Up`       | `Eject`   | `Fast_fo`| `Menu`  |
| `Down`     | `Setup`   | `Fast_ba`| `List`  |
| `Left`     | `Input`   | `Play_pa`| `Info`  |
| `Right`    | `Back`    | `Stop`   | `Mode`  |
| `Ok`       |           |          |         |

### Detailed Button Name Mapping

#### TV Buttons

| Standard Name | Alternative Names |
|:-------------:|:------------------|
| `Power`       | pwr, pw, p, on_off, on/off, standby, stby, switch, sw, toggle, tgl, powr |
| `Vol_up`      | v_up, v+, vu, volume_up, vol_increase, vol_inc, vol+, louder, volume_raise, audio_up, au_up |
| `Vol_dn`      | vol_down, v_down, v-, vd, volume_down, vol_decrease, vol_dec, vol_dwn, vol-, softer, volume_lower, audio_down, au_dn |
| `Ch_next`     | ch_up, ch+, c_up, c+, cu, channel_up, next_channel, channel_forward, ch_fwd, prog_up, program_up, p_up, pu |
| `Ch_prev`     | ch_down, ch_dn, ch-, c_down, c_dn, c-, cd, channel_down, previous_channel, channel_back, ch_bk, prog_down, program_down, p_down, p_dn, pd |
| `Mute`        | mu, mt, silence, sil, quiet, qt, audio_off, sound_off, no_sound, mte |

#### Audio Buttons

| Standard Name | Alternative Names |
|:-------------:|:------------------|
| `Power`       | (Same as TV) |
| `Vol_up`      | (Same as TV) |
| `Vol_dn`      | (Same as TV) |
| `Next`        | nxt, nx, n, skip_fwd, sk_f, forward, fwd, ff, fast_forward, track_forward, tr_fwd, next_track, skip_ahead |
| `Prev`        | previous, prv, pr, skip_back, sk_b, rewind, rew, rw, back, bk, track_back, tr_bk, previous_track, skip_previous |
| `Play`        | pl, ply, start, strt, resume, rsm, begin, bgn, playback, pb |
| `Pause`       | pse, ps, hold, hld, freeze, frz, suspend, spnd, break, brk |
| `Mute`        | (Same as TV) |

#### AC Buttons

| Standard Name | Alternative Names |
|:-------------:|:------------------|
| `Off`         | of, power, shutdown, shtdwn, shut_down, power_off, pwr_off, pw_off, p_off, turn_off, switch_off, sw_off |
| `Dh`          | dehumidify, dehum, dhum, dry, dehumid, moisture_remove, mst_rmv, humidity_control, hum_ctrl, water_remove, wtr_rmv |
| `Cool_hi`     | ch, cool_high, high_cool, hi_cool, max_cool, cool_max, strong_cool, str_cool |
| `Cool_lo`     | cl, cool_low, low_cool, min_cool, cool_min, gentle_cool, gnt_cool |
| `Heat_hi`     | hh, heat_high, high_heat, hi_heat, max_heat, heat_max, strong_heat, str_heat |
| `Heat_lo`     | hl, heat_low, low_heat, min_heat, heat_min, gentle_heat, gnt_heat |

## 2. File Naming Convention

| Format            | Example                    |
|:-----------------:|:--------------------------:|
| `Brand_Model.ir`  | `Samsung_UN55NU7100.ir`    |
|                   | `Sony_TV_DVDCB.ir`         |
|                   | `UnknownBrand_32inchLEDTV.ir` |
|                   | `Universal_TV_Remote_Model123.ir` |

### Guidelines:
- Use underscore (_) to separate words
- Include brand name first, followed by model
- For unknown brands or models, use descriptive names
- Omit device type from filename (include in metadata)

## 3. Metadata and Commenting

### Single-Line Comment Format

All metadata should be combined into a single line comment at the beginning of the file, following this format:

```
# BRAND: [Brand], DEVICE_MODEL: [Model], REMOTE_MODEL: [Remote], DEVICE_TYPE: [Type], PROTOCOL: [Protocol], LINK: [URL], DESCRIPTION: [Brief description]
```

### Fields:

| Field          | Description                                    | Required |
|:--------------:|:-----------------------------------------------|:--------:|
| `BRAND`        | Manufacturer's name                            | Yes      |
| `DEVICE_MODEL` | Model number of the controlled device          | Yes      |
| `REMOTE_MODEL` | Model number of the remote control (if known)  | No       |
| `DEVICE_TYPE`  | Type of device (e.g., TV, Audio, AC)           | Yes      |
| `PROTOCOL`     | IR protocol used (e.g., NEC, Samsung32)        | No       |
| `LINK`         | URL to device specifications or manual         | No       |
| `DESCRIPTION`  | Brief description of the device                | No       |

### Example:

```
# BRAND: Samsung, DEVICE_MODEL: UN55NU7100, REMOTE_MODEL: BN59-01199F, DEVICE_TYPE: TV, PROTOCOL: Samsung32, LINK: https://www.samsung.com/tv/UN55NU7100, DESCRIPTION: 55" 4K UHD Smart TV (2018)
```


