#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct SoIncomingCpuGroupDef {
    static constexpr int opt_name = 0x102A;
    static constexpr std::string_view name = "SO_INCOMING_CPU_GROUP";
    static constexpr std::string_view desc = "Affinity assignment of incoming socket traffic to specific NUMA domain";
};
}
