#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct SoIncomingCpuMaskDef {
    static constexpr int opt_name = 0x1027;
    static constexpr std::string_view name = "SO_INCOMING_CPU_MASK";
    static constexpr std::string_view desc = "Bitmask specifying affinity CPU core set for socket incoming connections";
};
}
