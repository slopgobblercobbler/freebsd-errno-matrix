#pragma once
#include <string_view>

namespace freebsd {
struct SoTsClockDef {
    static constexpr int opt_name = 0x1022;
    static constexpr std::string_view name = "SO_TS_CLOCK";
    static constexpr std::string_view desc = "Select clock source for packet timestamping (realtime vs monotonic)";
};
}
