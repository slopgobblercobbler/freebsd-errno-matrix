#pragma once
#include <string_view>

namespace freebsd {
struct SoAcceptFilterDef {
    static constexpr int opt_name = 0x1000;
    static constexpr std::string_view name = "SO_ACCEPTFILTER";
    static constexpr std::string_view desc = "Attach accept filter module to listening stream socket";
};
}
