#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct PosixSpawnDisableAslrDef {
    static constexpr std::uint16_t flag_mask = 0x1000;
    static constexpr std::string_view flag_name = "POSIX_SPAWN_DISABLE_ASLR";
};
}
