#pragma once
#include <string_view>

namespace freebsd {
struct SoIncomingCpuDef {
    static constexpr int opt_name = 0x1026;
    static constexpr std::string_view name = "SO_INCOMING_CPU";
    static constexpr std::string_view desc = "Affinity assignment of incoming network connections to specific CPU core";
};
}
