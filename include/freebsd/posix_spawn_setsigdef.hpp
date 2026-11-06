#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct PosixSpawnSetSigDefDef {
    static constexpr std::uint16_t flag_mask = 0x0004;
    static constexpr std::string_view flag_name = "POSIX_SPAWN_SETSIGDEF";
};
}
