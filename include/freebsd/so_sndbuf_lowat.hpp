#pragma once
#include <string_view>

namespace freebsd {
struct SoSndLowatDef {
    static constexpr int opt_name = 0x1003;
    static constexpr std::string_view name = "SO_SNDLOWAT";
    static constexpr std::string_view desc = "Socket send buffer low-water mark byte threshold";
};
}
