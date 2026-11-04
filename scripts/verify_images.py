import hashlib, os

def get_hash(path):
    with open(path, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()

pairs = [
    ('assets/images/brand/nexaouraa-emblem.png', 'archive/raw_stitch_export/whatsapp_image_2026_11_03_at_11.21.16_pm.jpeg/screen.png'),
    ('assets/images/brand/nexaouraa-brand-poster.png', 'archive/raw_stitch_export/whatsapp_image_2026_11_03_at_11.21.15_pm.jpeg/screen.png'),
    ('assets/images/brand/nexaouraa-logo.png', 'archive/raw_stitch_export/image.png_3/screen.png'),
    ('assets/images/industry/cmm-metrology.png', 'archive/raw_stitch_export/quality_engineer_using_digital_vernier_calipers_and_cmm_measuring_gauge_to/screen.png'),
    ('assets/images/industry/cnc-machining.png', 'archive/raw_stitch_export/high_precision_industrial_cnc_milling_machine_in_clean_automotive_manufacturing/screen.png'),
    ('assets/images/industry/assembly-line.png', 'archive/raw_stitch_export/modern_automotive_assembly_line_with_robotic_arms_and_factory_technicians_in/screen.png'),
    ('assets/images/industry/stamping-press.png', 'archive/raw_stitch_export/heavy_industrial_stamping_press_forming_sheet_metal_automotive_body_parts_in/screen.png'),
    ('assets/images/industry/gear-hobbing.png', 'archive/raw_stitch_export/industrial_gear_hobbing_machinery_cutting_helical_gears_in_heavy_engineering/screen.png'),
    ('assets/images/industry/robotic-welding.png', 'archive/raw_stitch_export/robotic_welding_cell_in_automotive_manufacturing_factory_with_bright_sparks/screen.png'),
    ('assets/images/industry/engine-leak-testing.png', 'archive/raw_stitch_export/automotive_engine_block_manufacturing_and_precision_leak_testing_station_with/screen.png'),
    ('assets/images/industry/paint-shop-robotics.png', 'archive/raw_stitch_export/industrial_paint_shop_automated_robotic_spraying_line_for_automotive_vehicle/screen.png'),
    ('assets/images/industry/smt-electronics-pcb.png', 'archive/raw_stitch_export/clean_electronics_manufacturing_smt_surface_mount_technology_pcb_assembly_line/screen.png'),
    ('assets/images/industry/lead-auditor-review.png', 'archive/raw_stitch_export/industrial_quality_lead_auditor_reviewing_blueprints_and_technical_compliance/screen.png'),
    ('assets/images/industry/supplier-audit-qc.png', 'archive/raw_stitch_export/professional_industrial_quality_control_auditor_conducting_supplier_audit_on/screen.png'),
]

all_match = True
for a, b in pairs:
    h1 = get_hash(a)
    h2 = get_hash(b)
    match = (h1 == h2)
    if not match:
        all_match = False
    print(f'{os.path.basename(a):25}: {"MATCH (Byte-for-byte identical)" if match else "MISMATCH"}')

print('Overall match:', all_match)
