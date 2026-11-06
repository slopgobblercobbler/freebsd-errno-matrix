#pragma once
#include <string_view>

namespace freebsd {
struct SoZeroCopyThresholdDef {
    static constexpr int opt_name = 0x1024;
    static constexpr std::string_view name = "SO_ZEROCOPY";
    static constexpr std::string_view desc = "Enable zero-copy transmit mechanism on supported network interfaces";
};
}
