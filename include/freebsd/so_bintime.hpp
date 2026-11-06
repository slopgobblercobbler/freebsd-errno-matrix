#pragma once
#include <string_view>

namespace freebsd {
struct SoBintimeDef {
    static constexpr int opt_name = 0x2000;
    static constexpr std::string_view name = "SO_BINTIME";
    static constexpr std::string_view desc = "Receive binary format timestamp with incoming packet";
};
}
