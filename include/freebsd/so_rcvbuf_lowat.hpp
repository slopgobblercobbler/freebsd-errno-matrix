#pragma once
#include <string_view>

namespace freebsd {
struct SoRcvLowatDef {
    static constexpr int opt_name = 0x1004;
    static constexpr std::string_view name = "SO_RCVLOWAT";
    static constexpr std::string_view desc = "Socket receive buffer low-water mark byte threshold";
};
}
